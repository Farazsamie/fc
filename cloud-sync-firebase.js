/**
 * Firebase Cloud Sync Module for Flashcard App
 * Uses Google Firebase Realtime Database (FREE)
 * No backend server needed!
 */

class FirebaseCloudSync {
    constructor() {
        this.userId = this.getOrCreateUserId();
        this.syncInterval = 30000; // Sync every 30 seconds
        this.lastSyncTime = 0;
        this.isSyncing = false;
        this.firebaseConfigured = false;
        this.db = null;
        
        // Load saved config from localStorage
        const savedConfig = localStorage.getItem('firebaseConfig');
        if (savedConfig) {
            this.firebaseConfig = JSON.parse(savedConfig);
            this.firebaseConfigured = true;
        }
        
        this.initSync();
    }

    getOrCreateUserId() {
        let userId = localStorage.getItem('userId');
        if (!userId) {
            userId = 'user_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
            localStorage.setItem('userId', userId);
        }
        return userId;
    }

    /**
     * Initialize Firebase with config
     */
    async initializeFirebase(config) {
        try {
            // Initialize Firebase
            const app = firebase.initializeApp(config);
            this.db = firebase.database(app);
            this.firebaseConfig = config;
            this.firebaseConfigured = true;
            
            // Save config to localStorage
            localStorage.setItem('firebaseConfig', JSON.stringify(config));
            
            console.log('✓ Firebase initialized successfully');
            return true;
        } catch (error) {
            console.error('Firebase initialization error:', error);
            alert('Error: ' + error.message);
            return false;
        }
    }

    initSync() {
        // Sync on page load if Firebase is configured
        if (this.firebaseConfigured && this.db) {
            this.syncFromCloud();
        }

        // Auto-sync periodically
        setInterval(() => {
            if (this.firebaseConfigured && this.db && !this.isSyncing) {
                this.syncToCloud();
            }
        }, this.syncInterval);

        // Sync on page visibility change
        document.addEventListener('visibilitychange', () => {
            if (!document.hidden && this.firebaseConfigured && this.db) {
                this.syncFromCloud();
            }
        });

        console.log('Cloud Sync initialized. UserId:', this.userId);
    }

    /**
     * Sync data to Firebase
     */
    async syncToCloud() {
        if (!this.firebaseConfigured || !this.db || this.isSyncing) {
            return;
        }

        this.isSyncing = true;

        try {
            const localData = localStorage.getItem('studyAppData');
            if (!localData) {
                this.isSyncing = false;
                return;
            }

            const data = {
                userId: this.userId,
                timestamp: new Date().toISOString(),
                data: JSON.parse(localData)
            };

            // Save to Firebase under user's ID
            await this.db.ref('users/' + this.userId).set(data);
            
            localStorage.setItem('lastCloudSync', new Date().toISOString());
            console.log('✓ Synced to Firebase successfully');
            this.updateSyncStatus(true);
        } catch (e) {
            console.error('Error syncing to Firebase:', e);
            this.updateSyncStatus(false);
        } finally {
            this.isSyncing = false;
        }
    }

    /**
     * Sync data from Firebase
     */
    async syncFromCloud() {
        if (!this.firebaseConfigured || !this.db) {
            return;
        }

        try {
            const snapshot = await this.db.ref('users/' + this.userId).once('value');
            const result = snapshot.val();
            
            if (result && result.data) {
                const cloudTimestamp = new Date(result.timestamp).getTime();
                const localDataStr = localStorage.getItem('studyAppData');
                const localTimestamp = localDataStr ? new Date(localStorage.getItem('lastLocalSave')).getTime() : 0;

                // Use cloud data if it's newer
                if (cloudTimestamp > localTimestamp) {
                    localStorage.setItem('studyAppData', JSON.stringify(result.data));
                    localStorage.setItem('lastCloudSync', new Date().toISOString());
                    console.log('✓ Synced from Firebase successfully');
                    this.updateSyncStatus(true);
                    
                    // Reload the app if it's already initialized
                    if (typeof app !== 'undefined') {
                        app.loadData();
                        updateCategoriesNav();
                    }
                }
            }
        } catch (e) {
            console.error('Error syncing from Firebase:', e);
            this.updateSyncStatus(false);
        }
    }

    /**
     * Update sync status UI
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
     * Get sync status info
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
     * Force immediate sync
     */
    async forceSync() {
        console.log('Force syncing...');
        await this.syncFromCloud();
        await this.syncToCloud();
    }

    /**
     * Export data as JSON with full metadata
     */
    exportFullBackup() {
        const localData = localStorage.getItem('studyAppData');
        const backup = {
            version: '1.0',
            exportDate: new Date().toISOString(),
            userId: this.userId,
            syncStatus: this.getStatus(),
            data: localData ? JSON.parse(localData) : null
        };

        const dataStr = JSON.stringify(backup, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(dataBlob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'flashcards_backup_' + new Date().toISOString().split('T')[0] + '.json';
        link.click();
        URL.revokeObjectURL(url);
    }

    /**
     * Restore from backup
     */
    restoreFromBackup(jsonData) {
        try {
            const backup = JSON.parse(jsonData);
            if (backup.data) {
                localStorage.setItem('studyAppData', JSON.stringify(backup.data));
                localStorage.setItem('lastLocalSave', new Date().toISOString());
                console.log('✓ Backup restored successfully');

                // Reload app if initialized
                if (typeof app !== 'undefined') {
                    app.loadData();
                    updateCategoriesNav();
                }
                return true;
            }
        } catch (e) {
            console.error('Error restoring backup:', e);
        }
        return false;
    }

    /**
     * Disable Firebase sync
     */
    disableSync() {
        this.firebaseConfigured = false;
        localStorage.removeItem('firebaseConfig');
        console.log('Firebase sync disabled');
    }
}

// Initialize Firebase Cloud Sync on page load
let cloudSync = null;
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        cloudSync = new FirebaseCloudSync();
    });
} else {
    cloudSync = new FirebaseCloudSync();
}
