const express = require('express');
const router = express.Router();
const { getDeliveryAnalytics, getDriverPerformance } = require('../controllers/analyticsController');

router.get('/deliveries', getDeliveryAnalytics);
router.get('/drivers', getDriverPerformance);

module.exports = router;
