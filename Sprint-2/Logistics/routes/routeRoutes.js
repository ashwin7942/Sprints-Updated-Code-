const express = require('express');
const { optimizeRoute, getOptimizedRoute } = require('../controllers/routeController');
const { authenticate } = require('../middleware/authMiddleware');

const router = express.Router();

// Optimize route
router.post('/optimize', authenticate, optimizeRoute);

// Get optimized route for a specific task
router.get('/:taskId', authenticate, getOptimizedRoute);

module.exports = router;
