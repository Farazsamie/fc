/**
 * Simple Firebase Cloud Sync
 * Syncs flashcards across devices
 */

class FirebaseCloudSync {
    constructor() {
        this.userId = this.getOrCreateUserId();
        this.db = null;
        this.firebaseConfigured = false;
        
        const saved = localStorage.getItem('firebaseConfig');
        if (saved) {
            this.firebaseConfig = JSON.parse(saved);
            this.firebaseConfigured = true;
            this.initializeFirebaseNow();
        }
        
        this.startAutoSync();
    }

    getOrCreateUserId() {
        let id = localStorage.getItem('userId');
        if (!id) {
            id = 'user_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
            localStorage.setItem('userId', id);
        }
        return id;
    }

    initializeFirebaseNow() {
        try {
            if (typeof firebase === 'undefined') return;
            
            let app;
            try {
                app = firebase.app();
            } catch (e) {
                app = firebase.initializeApp(this.firebaseConfig);
            }
            
            this.db = firebase.database(app);
            this.firebaseConfigured = true;
            console.log('✓ Firebase connected');
            this.syncFromCloud();
        } catch (e) {
            console.error('Firebase error:', e);
        }
    }

    async initializeFirebase(config) {
        try {
            if (typeof firebase === 'undefined') {
                throw new Error('Firebase SDK not available');
            }
            
            this.firebaseConfig = config;
            localStorage.setItem('firebaseConfig', JSON.stringify(config));
            
            let app;
            try {
                app = firebase.app();
            } catch (e) {
                app = firebase.initializeApp(config);
            }
            
            this.db = firebase.database(app);
            this.firebaseConfigured = true;
            
            console.log('✓ Firebase initialized');
            return true;
        } catch (error) {
            console.error('✗ Firebase error:', error.message);
            return false;
        }
    }

    startAutoSync() {
        setInterval(() => {
            if (this.firebaseConfigured && this.db) {
                this.syncToCloud().catch(e => console.error('Upload error:', e));
                this.syncFromCloud().catch(e => console.error('Download error:', e));
            }
        }, 15000);
    }

    async syncToCloud() {
        if (!this.firebaseConfigured || !this.db) return;
        
        try {
            const data = localStorage.getItem('studyAppData');
            if (!data) return;
            
            await this.db.ref('users/' + this.userId).set({
                userId: this.userId,
                timestamp: new Date().toISOString(),
                data: JSON.parse(data)
            });
            
            localStorage.setItem('lastCloudSync', new Date().toISOString());
            console.log('✓ Synced to cloud');
        } catch (e) {
            console.error('Upload failed:', e);
        }
    }

    async syncFromCloud() {
        if (!this.firebaseConfigured || !this.db) return;
        
        try {
            const snapshot = await this.db.ref('users/' + this.userId).once('value');
            const result = snapshot.val();
            
            if (result && result.data) {
                localStorage.setItem('studyAppData', JSON.stringify(result.data));
                localStorage.setItem('lastCloudSync', new Date().toISOString());
                
                if (typeof app !== 'undefined' && app) {
                    app.loadData();
                    if (typeof updateCategoriesNav === 'function') {
                        updateCategoriesNav();
                    }
                    if (typeof MathJax !== 'undefined' && MathJax.typesetPromise) {
                        MathJax.typesetPromise().catch(err => console.log(err));
                    }
                }
                
                console.log('✓ Synced from cloud');
            }
        } catch (e) {
            console.error('Download failed:', e);
        }
    }

    async forceSync() {
        await this.syncToCloud();
        await this.syncFromCloud();
        alert('✓ Synced!');
    }

    createBackup() {
        try {
            const data = localStorage.getItem('studyAppData');
            if (!data) return;
            
            let backups = JSON.parse(localStorage.getItem('flashcardBackups') || '[]');
            backups.unshift({
                timestamp: new Date().toISOString(),
                data: JSON.parse(data)
            });
            backups = backups.slice(0, 5);
            localStorage.setItem('flashcardBackups', JSON.stringify(backups));
        } catch (e) {
            console.error('Backup error:', e);
        }
    }

    getBackups() {
        try {
            const backups = JSON.parse(localStorage.getItem('flashcardBackups') || '[]');
            return backups.map(b => ({
                timestamp: b.timestamp,
                cardCount: b.data && b.data.categories ? Object.keys(b.data.categories).length : 0
            }));
        } catch (e) {
            return [];
        }
    }

    async restoreFromBackup(index) {
        try {
            const backups = JSON.parse(localStorage.getItem('flashcardBackups') || '[]');
            if (!backups[index]) throw new Error('Backup not found');
            
            localStorage.setItem('studyAppData', JSON.stringify(backups[index].data));
            
            if (typeof app !== 'undefined' && app) {
                app.loadData();
                if (typeof updateCategoriesNav === 'function') {
                    updateCategoriesNav();
                }
            }
            
            return true;
        } catch (e) {
            console.error('Restore error:', e);
            return false;
        }
    }

    exportData() {
        try {
            const data = localStorage.getItem('studyAppData');
            if (!data) {
                alert('No data to export');
                return;
            }
            
            const blob = new Blob([data], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = 'flashcards-' + new Date().toISOString().split('T')[0] + '.json';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
        } catch (e) {
            alert('Export error: ' + e.message);
        }
    }

    async importData(file) {
        try {
            const text = await file.text();
            const imported = JSON.parse(text);
            const data = imported.data || imported;
            localStorage.setItem('studyAppData', JSON.stringify(data));
            this.createBackup();
            
            if (typeof app !== 'undefined' && app) {
                app.loadData();
                if (typeof updateCategoriesNav === 'function') {
                    updateCategoriesNav();
                }
            }
            
            return true;
        } catch (e) {
            console.error('Import error:', e);
            return false;
        }
    }

    getStatus() {
        return {
            enabled: this.firebaseConfigured,
            userId: this.userId,
            lastSync: localStorage.getItem('lastCloudSync') || 'Never'
        };
    }

    disableSync() {
        this.firebaseConfigured = false;
        localStorage.removeItem('firebaseConfig');
    }

    updateSyncStatus(success) {
        const el = document.getElementById('syncStatusText');
        if (el) {
            el.textContent = success ? '✓ Connected' : '⚠ Syncing...';
            el.style.color = success ? '#4a7c4a' : '#8b7545';
        }
    }
}

// Create CloudSync when ready
let cloudSync = null;
window.cloudSyncReady = false;

function initCloudSync() {
    console.log('✓ Creating CloudSync');
    try {
        cloudSync = new FirebaseCloudSync();
        window.cloudSyncReady = true;
        console.log('✓ CloudSync ready');
    } catch (e) {
        console.error('CloudSync error:', e);
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCloudSync);
} else {
    initCloudSync();
}
