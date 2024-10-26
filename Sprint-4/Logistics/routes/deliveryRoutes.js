const express = require('express');
const router = express.Router();
const DeliveryController = require('../controllers/deliveryController');

router.post('/', DeliveryController.createDelivery);
router.put('/:id/accept', DeliveryController.acceptDelivery);
router.put('/:id/update', DeliveryController.updateDelivery);

module.exports = router;
