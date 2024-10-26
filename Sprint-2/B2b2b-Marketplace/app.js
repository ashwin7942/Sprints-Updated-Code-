const express = require('express');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes');
const crmRoutes = require('./routes/crmRoutes'); // CRM routes
const errorHandler = require('./utils/errorHandler');
const connectDB = require('./config/db');

dotenv.config();
const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/brand', productRoutes);
app.use('/api/retailer', orderRoutes);
app.use('/api/crm', crmRoutes);  // CRM route integration

// Error handling middleware
app.use(errorHandler);

// Connect to the MongoDB database
connectDB();

module.exports = app;
