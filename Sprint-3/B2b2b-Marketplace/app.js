const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

// Import routes
const analyticsRoutes = require('./routes/analyticsRoutes');
const paymentRoutes = require('./routes/paymentRoutes');
const notificationRoutes = require('./routes/notificationRoutes');
const authMiddleware = require('./middlewares/authMiddleware');

// Initialize the app
dotenv.config();
const app = express();

// Middleware
app.use(cors());  // Enable CORS
app.use(express.json());  // Parse JSON requests

// Routes
app.use('/api/analytics', authMiddleware, analyticsRoutes);
app.use('/api/payment', authMiddleware, paymentRoutes);
app.use('/api/notifications', authMiddleware, notificationRoutes);

// Database connection
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected successfully');
    } catch (err) {
        console.error('MongoDB connection error:', err);
        process.exit(1);  // Exit process with failure
    }
};

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// Connect to the database
connectDB();
