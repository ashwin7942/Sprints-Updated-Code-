const express = require('express');
const router = express.Router();
const { getDeliveryStatus, updateDeliveryStatus } = require('../controllers/deliveryController');

router.get('/:orderId', getDeliveryStatus);
router.post('/update', updateDeliveryStatus);

module.exports = router;
