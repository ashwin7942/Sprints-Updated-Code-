const express = require('express');
const router = express.Router();
const { addDeploymentLog, getDeploymentLogs } = require('../controllers/deploymentLogController');

router.post('/add', addDeploymentLog);
router.get('/', getDeploymentLogs);

module.exports = router;
