const express = require('express');
const router = express.Router();
const { runUnitTests, runIntegrationTests, runE2ETests } = require('../controllers/testingController');

router.get('/unit', runUnitTests);
router.get('/integration', runIntegrationTests);
router.get('/e2e', runE2ETests);

module.exports = router;
