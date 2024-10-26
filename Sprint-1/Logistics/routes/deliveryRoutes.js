const express = require('express');
const { createDelivery, updateDelivery } = require('../controllers/deliveryController');
const { authenticate } = require('../middleware/authMiddleware');
const { validateDelivery } = require('../validators/deliveryValidator');

const router = express.Router();

// Create a new delivery task
router.post('/', authenticate, validateDelivery, createDelivery);

// Update an existing delivery task
router.put('/:taskId', authenticate, updateDelivery);

module.exports = router;
