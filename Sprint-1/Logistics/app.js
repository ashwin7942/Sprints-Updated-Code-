const express = require('express');
const dotenv = require('dotenv');
const trackingRoutes = require('./routes/trackingRoutes');
const deliveryRoutes = require('./routes/deliveryRoutes');
const errorHandler = require('./utils/errorHandler');
const connectDB = require('./config/db');

dotenv.config();
const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/logistics/track', trackingRoutes);
app.use('/api/logistics/delivery', deliveryRoutes);

// Error handling middleware
app.use(errorHandler);

// Connect to the MySQL database
connectDB();

module.exports = app;
