/**
 * Cloud Sync Module for Flashcard App
 * Automatically syncs flashcard data across devices
 * Supports localStorage + Cloud backup
 */

class CloudSync {
    constructor() {
        this.userId = this.getOrCreateUserId();
        this.syncInterval = 30000; // Sync every 30 seconds
        this.lastSyncTime = 0;
        this.isSyncing = false;
        this.syncEnabled = localStorage.getItem('cloudSyncEnabled') === 'true';
        this.backendUrl = localStorage.getItem('cloudSyncBackendUrl') || '';
        this.apiKey = localStorage.getItem('cloudSyncApiKey') || '';
        
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

    initSync() {
        // Sync on page load
        if (this.syncEnabled && this.backendUrl) {
            this.syncFromCloud();
        }

        // Auto-sync periodically
        setInterval(() => {
            if (this.syncEnabled && this.backendUrl && !this.isSyncing) {
                this.syncToCloud();
            }
        }, this.syncInterval);

        // Sync on page visibility change
        document.addEventListener('visibilitychange', () => {
            if (!document.hidden && this.syncEnabled && this.backendUrl) {
                this.syncFromCloud();
            }
        });

        console.log('Cloud Sync initialized. UserId:', this.userId);
    }

    /**
     * Enable cloud sync with backend configuration
     */
    enableSync(backendUrl, apiKey) {
        this.backendUrl = backendUrl;
        this.apiKey = apiKey;
        this.syncEnabled = true;

        localStorage.setItem('cloudSyncEnabled', 'true');
        localStorage.setItem('cloudSyncBackendUrl', backendUrl);
        localStorage.setItem('cloudSyncApiKey', apiKey);

        console.log('Cloud sync enabled');
        this.syncToCloud();
    }

    /**
     * Disable cloud sync
     */
    disableSync() {
        this.syncEnabled = false;
        localStorage.setItem('cloudSyncEnabled', 'false');
        console.log('Cloud sync disabled');
    }

    /**
     * Save data locally and queue for cloud sync
     */
    saveLocally(data) {
        try {
            localStorage.setItem('studyAppData', JSON.stringify(data));
            localStorage.setItem('lastLocalSave', new Date().toISOString());
            
            // Queue for cloud sync if enabled
            if (this.syncEnabled) {
                this.queueCloudSync();
            }
        } catch (e) {
            console.error('Error saving locally:', e);
            if (e.name === 'QuotaExceededError') {
                console.warn('LocalStorage quota exceeded. Please export and backup your data.');
            }
        }
    }

    /**
     * Queue a cloud sync (prevents too frequent syncs)
     */
    queueCloudSync() {
        const now = Date.now();
        if (now - this.lastSyncTime > 5000) { // Minimum 5 seconds between syncs
            this.syncToCloud();
            this.lastSyncTime = now;
        }
    }

    /**
     * Sync data to cloud
     */
    async syncToCloud() {
        if (!this.syncEnabled || !this.backendUrl || this.isSyncing) {
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

            const response = await fetch(this.backendUrl + '/api/sync', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-API-Key': this.apiKey
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                const result = await response.json();
                localStorage.setItem('lastCloudSync', new Date().toISOString());
                console.log('✓ Synced to cloud successfully');
                this.updateSyncStatus(true);
            } else {
                console.error('Cloud sync failed:', response.status);
                this.updateSyncStatus(false);
            }
        } catch (e) {
            console.error('Error syncing to cloud:', e);
            this.updateSyncStatus(false);
        } finally {
            this.isSyncing = false;
        }
    }

    /**
     * Sync data from cloud
     */
    async syncFromCloud() {
        if (!this.syncEnabled || !this.backendUrl) {
            return;
        }

        try {
            const response = await fetch(this.backendUrl + '/api/sync?userId=' + this.userId, {
                method: 'GET',
                headers: {
                    'X-API-Key': this.apiKey
                }
            });

            if (response.ok) {
                const result = await response.json();
                if (result.data) {
                    const cloudTimestamp = new Date(result.timestamp).getTime();
                    const localDataStr = localStorage.getItem('studyAppData');
                    const localTimestamp = localDataStr ? new Date(localStorage.getItem('lastLocalSave')).getTime() : 0;

                    // Use cloud data if it's newer
                    if (cloudTimestamp > localTimestamp) {
                        localStorage.setItem('studyAppData', JSON.stringify(result.data));
                        localStorage.setItem('lastCloudSync', new Date().toISOString());
                        console.log('✓ Synced from cloud successfully');
                        this.updateSyncStatus(true);
                        
                        // Reload the app if it's already initialized
                        if (typeof app !== 'undefined') {
                            app.loadData();
                            updateCategoriesNav();
                        }
                    }
                }
            }
        } catch (e) {
            console.error('Error syncing from cloud:', e);
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
            enabled: this.syncEnabled,
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
}

// Initialize cloud sync on page load
let cloudSync = null;
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        cloudSync = new CloudSync();
    });
} else {
    cloudSync = new CloudSync();
}
