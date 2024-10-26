const Delivery = require('../models/Delivery');

exports.getDeliveryStatus = async (orderId) => {
    return await Delivery.findOne({ orderId });
};

exports.updateDeliveryStatus = async (orderId, status) => {
    return await Delivery.findOneAndUpdate({ orderId }, { status }, { new: true });
};
