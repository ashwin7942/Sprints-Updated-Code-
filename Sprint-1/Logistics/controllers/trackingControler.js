const Delivery = require('../models/Delivery');

// Get current geo-location of an order
exports.getCurrentLocation = (req, res, next) => {
  const { orderId } = req.params;
  
  Delivery.track(orderId, (err, result) => {
    if (err) return next(err);
    if (!result.length) return res.status(404).json({ message: 'Order not found' });
    
    res.status(200).json({ success: true, data: result[0] });
  });
};

// Update the current location of a delivery driver
exports.updateLocation = (req, res, next) => {
  const { orderId, currentLocation } = req.body;

  if (!orderId || !currentLocation) {
    return res.status(400).json({ message: 'Order ID and current location are required' });
  }

  Delivery.track(orderId, (err, result) => {
    if (err) return next(err);
    if (!result.length) return res.status(404).json({ message: 'Order not found' });

    Delivery.update(result[0].id, { currentLocation }, (err, updateResult) => {
      if (err) return next(err);
      res.status(200).json({ success: true, message: 'Location updated successfully' });
    });
  });
};
