const express = require('express');
const { getOrders, createOrder, updateOrder } = require('../controllers/orderController');
const { authenticate } = require('../middleware/authMiddleware');

const router = express.Router();

// Retrieve all orders (Only accessible by Distributors)
router.get('/orders', authenticate, getOrders);

// Create a new order (Only accessible by Distributors)
router.post('/orders', authenticate, createOrder);

// Update an existing order
router.put('/orders/:orderId', authenticate, updateOrder);

module.exports = router;
