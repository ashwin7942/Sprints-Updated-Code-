const Order = require('../models/Order');

// Create a new order for a retailer
exports.createRetailerOrder = async (req, res, next) => {
  try {
    const order = await Order.create({
      retailerId: req.user._id,
      productId: req.body.productId,
      quantity: req.body.quantity,
      status: 'Pending',
    });
    res.status(201).json({ success: true, data: order });
  } catch (err) {
    next(err);
  }
};

// Get all orders for a retailer
exports.getRetailerOrders = async (req, res, next) => {
  try {
    const orders = await Order.find({ retailerId: req.user._id });
    res.status(200).json({ success: true, data: orders });
  } catch (err) {
    next(err);
  }
};

// Update a retailer's order
exports.updateRetailerOrder = async (req, res, next) => {
  try {
    const order = await Order.findByIdAndUpdate(req.params.orderId, req.body, {
      new: true,
      runValidators: true,
    });
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.status(200).json({ success: true, data: order });
  } catch (err) {
    next(err);
  }
};
