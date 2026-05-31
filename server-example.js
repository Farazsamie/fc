// Flashcard Cloud Sync Backend Server
// Simple Node.js + Express server for syncing flashcards across devices

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// IMPORTANT: Change this to a secure password/key for production
const API_KEY = 'your-secure-api-key-here';

// In-memory storage (replace with database for production)
const dataStore = {};

// Middleware
app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));

// Check API Key on all requests
app.use((req, res, next) => {
    if (req.path === '/health') {
        next();
        return;
    }
    
    const key = req.headers['x-api-key'];
    if (key !== API_KEY) {
        return res.status(401).json({ error: 'Unauthorized' });
    }
    next();
});

// Save/Update flashcard data
app.post('/api/sync', (req, res) => {
    try {
        const { userId, data } = req.body;
        
        if (!userId || !data) {
            return res.status(400).json({ error: 'Missing userId or data' });
        }
        
        dataStore[userId] = {
            timestamp: new Date().toISOString(),
            data: data
        };
        
        res.json({ success: true });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get flashcard data
app.get('/api/sync', (req, res) => {
    try {
        const userId = req.query.userId;
        if (!userId) {
            return res.status(400).json({ error: 'Missing userId' });
        }
        
        const userData = dataStore[userId];
        res.json(userData || { data: null });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({ status: 'ok' });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log(`API Key: ${API_KEY}`);
});
