const express = require('express');
const router = express.Router();
const { getSalesAnalytics, getProductPerformance } = require('../controllers/analyticsController');

router.get('/sales', getSalesAnalytics);
router.get('/products', getProductPerformance);

module.exports = router;
