const Delivery = require('../models/Delivery');

// Create a new delivery task
exports.createDelivery = (req, res, next) => {
  const { orderId, driverId, currentLocation, status, estimatedDeliveryTime } = req.body;
  
  if (!orderId || !driverId || !currentLocation || !status) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  Delivery.create({ orderId, driverId, currentLocation, status, estimatedDeliveryTime }, (err, result) => {
    if (err) return next(err);
    res.status(201).json({ success: true, message: 'Delivery task created successfully' });
  });
};

// Update an existing delivery task
exports.updateDelivery = (req, res, next) => {
  const { taskId } = req.params;
  const { currentLocation, status, estimatedDeliveryTime } = req.body;

  Delivery.update(taskId, { currentLocation, status, estimatedDeliveryTime }, (err, result) => {
    if (err) return next(err);
    res.status(200).json({ success: true, message: 'Delivery task updated successfully' });
  });
};
