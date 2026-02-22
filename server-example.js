// Simple Backend Example for Flashcard Cloud Sync
// This is a Node.js + Express example that you can use as a starting point
// To use: npm install express cors body-parser, then node server.js

// The flashcard app will send data to: http://your-server/api/sync
// With headers: X-API-Key: your-api-key

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const API_KEY = process.env.API_KEY || 'your-api-key';

// In-memory database (replace with real database in production)
const dataStore = {};

// Middleware
app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));

// Verify API Key
function verifyApiKey(req, res, next) {
    const apiKey = req.headers['x-api-key'];
    if (apiKey !== API_KEY) {
        return res.status(401).json({ error: 'Unauthorized' });
    }
    next();
}

// Sync endpoint - POST: save data
app.post('/api/sync', verifyApiKey, (req, res) => {
    try {
        const { userId, timestamp, data } = req.body;
        
        if (!userId || !data) {
            return res.status(400).json({ error: 'Missing userId or data' });
        }

        // Store data
        dataStore[userId] = {
            timestamp: timestamp || new Date().toISOString(),
            data: data
        };

        console.log(`✓ Data synced for user ${userId}`);
        res.json({ success: true, message: 'Data synced successfully' });
    } catch (error) {
        console.error('Sync error:', error);
        res.status(500).json({ error: error.message });
    }
});

// Sync endpoint - GET: retrieve data
app.get('/api/sync', verifyApiKey, (req, res) => {
    try {
        const userId = req.query.userId;
        
        if (!userId) {
            return res.status(400).json({ error: 'Missing userId' });
        }

        const userData = dataStore[userId];
        if (!userData) {
            return res.status(404).json({ data: null });
        }

        console.log(`✓ Data retrieved for user ${userId}`);
        res.json(userData);
    } catch (error) {
        console.error('Retrieve error:', error);
        res.status(500).json({ error: error.message });
    }
});

// Health check
app.get('/health', (req, res) => {
    res.json({ status: 'ok' });
});

app.listen(PORT, () => {
    console.log(`Cloud Sync Server running on port ${PORT}`);
    console.log(`API Key: ${API_KEY}`);
    console.log(`\nTo use in your app:`);
    console.log(`  Backend URL: http://localhost:${PORT}`);
    console.log(`  API Key: ${API_KEY}`);
});

// For production, replace the in-memory dataStore with a real database:
// - MongoDB: cloud.mongodb.com
// - PostgreSQL: Supabase, Railway, or Render
// - Firebase: Already set up in Google Cloud
// - AWS: DynamoDB, RDS, or S3

// Example MongoDB implementation:
/*
const mongoose = require('mongoose');

const SyncDataSchema = new mongoose.Schema({
    userId: String,
    timestamp: Date,
    data: Object
}, { timestamps: true });

const SyncData = mongoose.model('SyncData', SyncDataSchema);

// Replace POST handler with:
app.post('/api/sync', verifyApiKey, async (req, res) => {
    try {
        const { userId, data } = req.body;
        await SyncData.findOneAndUpdate(
            { userId },
            { data, timestamp: new Date() },
            { upsert: true }
        );
        res.json({ success: true });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Replace GET handler with:
app.get('/api/sync', verifyApiKey, async (req, res) => {
    try {
        const userId = req.query.userId;
        const userData = await SyncData.findOne({ userId });
        if (!userData) {
            return res.json({ data: null });
        }
        res.json(userData);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
*/
