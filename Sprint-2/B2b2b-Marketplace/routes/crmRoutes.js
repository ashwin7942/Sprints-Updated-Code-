const express = require('express');
const { syncOrdersToCRM, getCustomerData } = require('../controllers/crmController');
const { authenticate } = require('../middleware/authMiddleware');

const router = express.Router();

// Sync orders to CRM
