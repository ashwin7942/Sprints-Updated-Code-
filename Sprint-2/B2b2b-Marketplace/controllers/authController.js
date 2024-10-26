const User = require('../models/User');
const jwt = require('jsonwebtoken');

// Generate JWT token
const generateToken = (user) => {
  return jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: '1d', // Token expires in 1 day
  });
};

// Register a new user
exports.register = async (req, res, next) => {
  try {
    const { name, email, password, role } = req.body;

    const user = await User.create({ name, email, password, role });
    const token = generateToken(user);

    res.status(201).json({ success: true, token });
  } catch (err) {
    next(err);
  }
};

// Login a user
exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user || !(await user.matchPassword(password))) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = generateToken(user);
    res.status(200).json({ success: true, token });
  } catch (err) {
    next(err);
  }
};

// Logout a user
exports.logout = (req, res) => {
  res.status(200).json({ success: true, message: 'Logged out successfully' });
};
