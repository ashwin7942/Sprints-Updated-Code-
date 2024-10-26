const express = require('express');
const { getInventory, updateInventory } = require('../controllers/productController');
const { authenticate } = require('../middleware/authMiddleware');

const router = express.Router();

// Get inventory
router.get('/inventory', authenticate, getInventory);

// Update inventory
router.put('/inventory/:productId', authenticate, updateInventory);

module.exports = router;
