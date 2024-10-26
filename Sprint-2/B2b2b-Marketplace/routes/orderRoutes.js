const express = require('express');
const { createRetailerOrder, getRetailerOrders, updateRetailerOrder } = require('../controllers/orderController');
const { authenticate } = require('../middleware/authMiddleware');
const { validateOrder } = require('../validators/orderValidator');

const router = express.Router();

// Create a new retailer order
router.post('/order', authenticate, validateOrder, createRetailerOrder);

// Get all retailer orders
router.get('/orders', authenticate, getRetailerOrders);

// Update retailer order
router.put('/orders/:orderId', authenticate, updateRetailerOrder);

module.exports = router;
