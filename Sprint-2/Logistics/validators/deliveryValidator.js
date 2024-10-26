const { check, validationResult } = require('express-validator');

exports.validateDelivery = [
  check('orderId', 'Order ID is required').notEmpty(),
  check('driverId', 'Driver ID is required').notEmpty(),
  check('currentLocation', 'Current location is required').notEmpty(),
  check('status', 'Status is required').notEmpty(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];
