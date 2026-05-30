/**
 * ========================================
 * FIREBASE CLOUD SYNC MODULE
 * ========================================
 * 
 * Syncs flashcards across all devices using Firebase Realtime Database
 * - Automatic sync every 30 seconds
 * - Works offline (syncs when online)
 * - 100% FREE (Firebase free tier)
 * 
 * SETUP:
 * 1. Go to https://console.firebase.google.com/
 * 2. Create project → Enable Realtime Database → Enable Anonymous Auth
 * 3. Copy Project ID from Project Settings
 * 4. Enter Project ID in app Settings → "Configure Firebase Cloud Sync"
 * 5. Done! Your flashcards now sync across all devices
 * ========================================
 */

class FirebaseCloudSync {
    constructor() {
        // Create unique user ID for this device
        this.userId = this.getOrCreateUserId();
        
        // Sync settings
        this.syncInterval = 30000; // Auto-sync every 30 seconds
        this.lastSyncTime = 0;
        this.isSyncing = false;
        this.firebaseConfigured = false;
        this.db = null;
        
        // Try to load previously saved Firebase config
        const savedConfig = localStorage.getItem('firebaseConfig');
        if (savedConfig) {
            this.firebaseConfig = JSON.parse(savedConfig);
            this.firebaseConfigured = true;
        }
        
        this.initSync();
    }

    /**
     * Create a unique ID for this device/user
     * Allows identifying which device made changes
     */
    getOrCreateUserId() {
        let userId = localStorage.getItem('userId');
        if (!userId) {
            // Generate unique ID: timestamp + random string
            userId = 'user_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
            localStorage.setItem('userId', userId);
        }
        return userId;
    }

    /**
     * Initialize Firebase with project configuration
     * Called when user enters their Firebase Project ID in Settings
     */
    async initializeFirebase(config) {
        try {
            // Wait for Firebase SDK to be available
            let attempts = 0;
            while (typeof firebase === 'undefined' && attempts < 50) {
                await new Promise(resolve => setTimeout(resolve, 100));
                attempts++;
            }
            
            if (typeof firebase === 'undefined') {
                throw new Error('Firebase SDK failed to load. Please refresh the page and try again.');
            }
            
            // Check if Firebase is already initialized
            let app;
            try {
                app = firebase.app();
            } catch (e) {
                // Firebase not initialized yet - initialize it
                app = firebase.initializeApp(config);
            }
            
            // Get reference to Realtime Database
            this.db = firebase.database(app);
            this.firebaseConfig = config;
            this.firebaseConfigured = true;
            
            // Save config so it persists across page reloads
            localStorage.setItem('firebaseConfig', JSON.stringify(config));
            
            // Create automatic backup
            this.createBackup();
            
            console.log('✓ Firebase initialized successfully');
            console.log('✓ Flashcards will now sync across all devices');
            return true;
        } catch (error) {
            console.error('Firebase initialization error:', error);
            alert('Error setting up Firebase: ' + error.message);
            return false;
        }
    }

    /**
     * Start the auto-sync process
     * - Syncs on page load
     * - Syncs every 30 seconds
     * - Syncs when tab becomes visible (user returns to app)
     */
    initSync() {
        // Sync on page load if Firebase is already configured
        if (this.firebaseConfigured && this.db) {
            console.log('📱 Firebase configured - syncing data...');
            this.syncFromCloud().catch(err => console.error('Initial sync error:', err));
        }

        // Auto-sync periodically (every 20 seconds - more frequent for better experience)
        setInterval(() => {
            if (this.firebaseConfigured && this.db && !this.isSyncing) {
                this.syncToCloud().catch(err => console.error('Auto sync error:', err));
            }
        }, 20000); // Changed from 30000 to 20000 for faster sync
        
        // Download changes from cloud every 25 seconds
        setInterval(() => {
            if (this.firebaseConfigured && this.db && !this.isSyncing) {
                this.syncFromCloud().catch(err => console.error('Auto sync download error:', err));
            }
        }, 25000);

        // Sync when user returns to the app tab
        document.addEventListener('visibilitychange', () => {
            if (!document.hidden && this.firebaseConfigured && this.db) {
                console.log('📱 App tab became visible - syncing...');
                this.syncFromCloud().catch(err => console.error('Visibility sync error:', err));
            }
        });

        console.log('✓ Sync system initialized. Device ID:', this.userId);
    }

    /**
     * Upload local flashcard data to Firebase
     * Called automatically every 20 seconds
     * 
     * Flow:
     * 1. Get local data from browser storage
     * 2. Send to Firebase under this user's ID
     * 3. Mark as synced if successful
     */
    async syncToCloud() {
        // Don't sync if Firebase not configured or already syncing
        if (!this.firebaseConfigured || !this.db || this.isSyncing) {
            return;
        }

        this.isSyncing = true;

        try {
            // Get all flashcard data from local storage
            const localData = localStorage.getItem('studyAppData');
            if (!localData) {
                // No data to sync
                this.isSyncing = false;
                return;
            }

            // Prepare data package to send to Firebase
            const data = {
                userId: this.userId,
                timestamp: new Date().toISOString(),
                data: JSON.parse(localData)
            };

            // Upload to Firebase at path: users/{userId}
            await this.db.ref('users/' + this.userId).set(data);
            
            // Record successful sync time
            localStorage.setItem('lastCloudSync', new Date().toISOString());
            console.log('✓ Uploaded to Firebase at', new Date().toLocaleTimeString());
            
            // Create automatic backup after successful sync
            this.createBackup();
            
            this.updateSyncStatus(true);
        } catch (e) {
            console.error('❌ Error uploading to Firebase:', e);
            console.error('Check that: 1) Firebase Project ID is correct, 2) Realtime Database is enabled, 3) You have internet connection');
            this.updateSyncStatus(false);
        } finally {
            this.isSyncing = false;
        }
    }

    /**
     * Download flashcard data from Firebase
     * Called when app starts and every 30 seconds
     * 
     * Flow:
     * 1. Check Firebase for newer data
     * 2. Compare timestamps with local data
     * 3. Use cloud data if it's newer
     * 4. Reload app with updated data
     */
    async syncFromCloud() {
        // Don't sync if Firebase not configured
        if (!this.firebaseConfigured || !this.db) {
            return;
        }

        try {
            // Fetch data from Firebase for this user
            const snapshot = await this.db.ref('users/' + this.userId).once('value');
            const result = snapshot.val();
            
            if (result && result.data) {
                // Compare cloud timestamp with local timestamp
                const cloudTimestamp = new Date(result.timestamp).getTime();
                const localDataStr = localStorage.getItem('studyAppData');
                const localTimestamp = localDataStr ? new Date(localStorage.getItem('lastLocalSave')).getTime() : 0;

                // Use cloud data if it's newer than local data (or if no local data exists)
                if (cloudTimestamp >= localTimestamp) {
                    localStorage.setItem('studyAppData', JSON.stringify(result.data));
                    localStorage.setItem('lastCloudSync', new Date().toISOString());
                    console.log('✓ Downloaded from Firebase - syncing to all views');
                    this.updateSyncStatus(true);
                    
                    // Reload the app with new data and refresh all views
                    if (typeof app !== 'undefined' && app) {
                        app.loadData();
                        
                        // Update all UI elements
                        if (typeof updateCategoriesNav === 'function') {
                            updateCategoriesNav();
                        }
                        
                        // Refresh the current view being displayed
                        const currentView = document.querySelector('.content.active');
                        if (currentView && currentView.id === 'learn') {
                            if (typeof updateLearnView === 'function') {
                                updateLearnView();
                            }
                        }
                        
                        // If MathJax is available, reprocess equations
                        if (typeof MathJax !== 'undefined' && MathJax.typesetPromise) {
                            MathJax.typesetPromise().catch(err => console.log(err));
                        }
                    }
                }
            }
        } catch (e) {
            console.error('Error downloading from Firebase:', e);
            this.updateSyncStatus(false);
        }
    }

    /**
     * Update the UI sync status indicator (shows Connected/Not Connected)
     */
    updateSyncStatus(success) {
        const statusEl = document.getElementById('syncStatusText');
        if (statusEl) {
            if (success) {
                statusEl.textContent = '✓ Connected';
                statusEl.style.color = '#4a7c4a';
            } else {
                statusEl.textContent = '! Connection issue';
                statusEl.style.color = '#8b7545';
            }
        }
    }

    /**
     * Get current sync status information
     * Used to display in Settings
     */
    getStatus() {
        return {
            enabled: this.firebaseConfigured,
            userId: this.userId,
            lastSync: localStorage.getItem('lastCloudSync'),
            lastLocalSave: localStorage.getItem('lastLocalSave'),
            isSyncing: this.isSyncing
        };
    }

    /**
     * Manually trigger a full sync (upload + download)
     * Called when user clicks "Sync Now" button in Settings
     * Shows immediate feedback to user
     */
    async forceSync() {
        console.log('⏳ Manual sync triggered...');
        const statusEl = document.getElementById('syncStatusText');
        const originalText = statusEl ? statusEl.textContent : '';
        
        try {
            if (statusEl) statusEl.textContent = '⏳ Syncing...';
            
            // Download first to get latest data
            await this.syncFromCloud();
            // Then upload any local changes
            await this.syncToCloud();
            
            if (statusEl) {
                statusEl.textContent = '✓ Synced!';
                statusEl.style.color = '#4a7c4a';
                setTimeout(() => {
                    statusEl.textContent = originalText;
                }, 2000);
            }
        } catch (error) {
            console.error('Sync error:', error);
            if (statusEl) {
                statusEl.textContent = '! Sync failed';
                statusEl.style.color = '#8b7545';
            }
        }
    }

    /**
     * Disable Firebase sync
     * User data remains locally - can be re-enabled anytime
     */
    disableSync() {
        this.firebaseConfigured = false;
        localStorage.removeItem('firebaseConfig');
        console.log('Cloud sync disabled');
    }

    /**
     * Create automatic backup of flashcard data
     * Stores backup in IndexedDB and localStorage
     * Prevents data loss even if cloud sync fails
     */
    async createBackup() {
        try {
            const studyAppData = localStorage.getItem('studyAppData');
            if (!studyAppData) return;

            const backup = {
                timestamp: new Date().toISOString(),
                data: JSON.parse(studyAppData),
                userId: this.userId
            };

            // Store multiple backups (keep last 5)
            let backups = JSON.parse(localStorage.getItem('flashcardBackups') || '[]');
            backups.unshift(backup);
            backups = backups.slice(0, 5); // Keep only last 5 backups
            localStorage.setItem('flashcardBackups', JSON.stringify(backups));

            console.log('✓ Backup created. Total backups:', backups.length);
        } catch (error) {
            console.error('Error creating backup:', error);
        }
    }

    /**
     * Get list of available backups
     * Returns array of backup timestamps
     */
    getBackups() {
        try {
            const backups = JSON.parse(localStorage.getItem('flashcardBackups') || '[]');
            return backups.map(b => ({
                timestamp: b.timestamp,
                cardCount: b.data && b.data.categories ? Object.keys(b.data.categories).length : 0
            }));
        } catch (error) {
            console.error('Error getting backups:', error);
            return [];
        }
    }

    /**
     * Restore flashcard data from a backup
     * @param {number} backupIndex - Index of backup to restore (0 = most recent)
     */
    async restoreFromBackup(backupIndex = 0) {
        try {
            const backups = JSON.parse(localStorage.getItem('flashcardBackups') || '[]');
            if (!backups[backupIndex]) {
                throw new Error('Backup not found');
            }

            const backup = backups[backupIndex];
            localStorage.setItem('studyAppData', JSON.stringify(backup.data));
            localStorage.setItem('lastLocalSave', backup.timestamp);

            console.log('✓ Restored from backup at', new Date(backup.timestamp).toLocaleString());
            
            // Reload the app with restored data
            if (typeof app !== 'undefined' && app) {
                app.loadData();
                if (typeof updateCategoriesNav === 'function') {
                    updateCategoriesNav();
                }
                if (typeof MathJax !== 'undefined' && MathJax.typesetPromise) {
                    MathJax.typesetPromise().catch(err => console.log(err));
                }
            }

            return true;
        } catch (error) {
            console.error('Error restoring backup:', error);
            return false;
        }
    }

    /**
     * Export all flashcard data as JSON file
     * User can download and keep as permanent backup
     */
    exportData() {
        try {
            const data = localStorage.getItem('studyAppData');
            if (!data) {
                alert('No data to export');
                return;
            }

            const exportObj = {
                exportDate: new Date().toISOString(),
                version: '1.0',
                data: JSON.parse(data)
            };

            const dataStr = JSON.stringify(exportObj, null, 2);
            const dataBlob = new Blob([dataStr], { type: 'application/json' });
            const url = URL.createObjectURL(dataBlob);
            const link = document.createElement('a');
            link.href = url;
            link.download = `flashcards-backup-${new Date().toISOString().split('T')[0]}.json`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);

            console.log('✓ Data exported successfully');
        } catch (error) {
            console.error('Error exporting data:', error);
            alert('Error exporting data');
        }
    }

    /**
     * Import flashcard data from JSON file
     * Restores previously exported backups
     */
    importData(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = (e) => {
                try {
                    const importObj = JSON.parse(e.target.result);
                    const data = importObj.data || importObj; // Handle both formats

                    localStorage.setItem('studyAppData', JSON.stringify(data));
                    localStorage.setItem('lastLocalSave', new Date().toISOString());
                    this.createBackup();

                    console.log('✓ Data imported successfully');
                    
                    // Reload app with imported data
                    if (typeof app !== 'undefined' && app) {
                        app.loadData();
                        if (typeof updateCategoriesNav === 'function') {
                            updateCategoriesNav();
                        }
                        if (typeof MathJax !== 'undefined' && MathJax.typesetPromise) {
                            MathJax.typesetPromise().catch(err => console.log(err));
                        }
                    }

                    resolve(true);
                } catch (error) {
                    console.error('Error importing data:', error);
                    reject(error);
                }
            };
            reader.onerror = () => reject(reader.error);
            reader.readAsText(file);
        });
    }
}

/**
 * Initialize Firebase Cloud Sync on page load
 * This runs automatically when the page opens
 */
let cloudSync = null;
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        cloudSync = new FirebaseCloudSync();
    });
} else {
    cloudSync = new FirebaseCloudSync();
}
