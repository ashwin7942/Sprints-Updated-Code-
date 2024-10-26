const express = require('express');
const { getProducts, addProduct } = require('../controllers/productController');
const { authenticate } = require('../middleware/authMiddleware');

const router = express.Router();

// Retrieve all products (Only accessible by Brands)
router.get('/products', authenticate, getProducts);

// Add new product (Only accessible by Brands)
router.post('/products', authenticate, addProduct);

module.exports = router;
