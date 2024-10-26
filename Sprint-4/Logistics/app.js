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
const deliveryRoutes = require('./routes/deliveryRoutes'); // New delivery routes

// Initialize the app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());  // Parse incoming JSON requests

// Connect to the database
connectDB();

// Routes
app.use('/api/testing', testingRoutes);
app.use('/api/deployment/logs', deploymentLogRoutes);
app.use('/api/logistics/delivery', deliveryRoutes); // Delivery-related routes

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
