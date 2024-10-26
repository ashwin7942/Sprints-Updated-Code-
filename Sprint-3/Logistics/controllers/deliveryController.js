const deliveryService = require('../services/deliveryService');

exports.getDeliveryStatus = async (req, res) => {
    const { orderId } = req.params;
    try {
        const delivery = await deliveryService.getDeliveryStatus(orderId);
        res.status(200).json(delivery);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching delivery status', error: err });
    }
};

exports.updateDeliveryStatus = async (req, res) => {
    const { orderId, status } = req.body;
    try {
        const updatedDelivery = await deliveryService.updateDeliveryStatus(orderId, status);
        res.status(200).json(updatedDelivery);
    } catch (err) {
        res.status(500).json({ message: 'Error updating delivery status', error: err });
    }
};
