const express = require('express');
const { register, login, logout } = require('../controllers/authController');
const { validateRegister, validateLogin } = require('../validators/userValidator');

const router = express.Router();

// Registration route
router.post('/register', validateRegister, register);

// Login route
router.post('/login', validateLogin, login);

// Logout route
router.post('/logout', logout);

module.exports = router;
