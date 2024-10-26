const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Load environment variables
dotenv.config();

// Import routes
const analyticsRoutes = require('./routes/analyticsRoutes');
const notificationRoutes = require('./routes/notificationRoutes');
const deliveryRoutes = require('./routes/deliveryRoutes');
const authMiddleware = require('./middlewares/authMiddleware');

// Initialize the app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());  // Parse incoming JSON requests

// Connect to the database
connectDB();

// Routes
app.use('/api/logistics/analytics', authMiddleware, analyticsRoutes);
app.use('/api/logistics/notifications', authMiddleware, notificationRoutes);
app.use('/api/logistics/delivery', authMiddleware, deliveryRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
