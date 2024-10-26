const { check, validationResult } = require('express-validator');

exports.validateOrder = [
  check('productId', 'Product ID is required').notEmpty(),
  check('quantity', 'Quantity is required').isInt({ gt: 0 }),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];
