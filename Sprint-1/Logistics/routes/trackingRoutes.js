const express = require('express');
const { getCurrentLocation, updateLocation } = require('../controllers/trackingController');
const { authenticate } = require('../middleware/authMiddleware');

const router = express.Router();

// Get the current location of an order
router.get('/:orderId', authenticate, getCurrentLocation);

// Update the current location of a delivery driver
router.post('/', authenticate, updateLocation);

module.exports = router;
