const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

// Load environment variables
dotenv.config();

// Import routes
const testingRoutes = require('./routes/testingRoutes');
const deploymentLogRoutes = require('./routes/deploymentLogRoutes');
const authMiddleware = require('./middlewares/authMiddleware');
const errorMiddleware = require('./middlewares/errorMiddleware');
const logMiddleware = require('./middlewares/logMiddleware');

// Initialize the app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());  // Parse incoming JSON requests
app.use(logMiddleware);   // Log all incoming requests

// Connect to the database
connectDB();

// Routes
app.use('/api/testing', authMiddleware, testingRoutes);
app.use('/api/deployment/logs', authMiddleware, deploymentLogRoutes);

// Error handling middleware
app.use(errorMiddleware);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
