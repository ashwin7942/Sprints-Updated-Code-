const express = require('express');
const router = express.Router();
const { sendNotification, getNotificationsByDelivery } = require('../controllers/notificationController');

router.post('/send', sendNotification);
router.get('/:deliveryId', getNotificationsByDelivery);

module.exports = router;
