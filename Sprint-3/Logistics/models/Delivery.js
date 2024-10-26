const mongoose = require('mongoose');

const deliverySchema = new mongoose.Schema({
    orderId: { type: String, required: true },
    driverId: { type: mongoose.Schema.Types.ObjectId, ref: 'Driver', required: true },
    status: { type: String, enum: ['In Transit', 'Delivered', 'Delayed'], default: 'In Transit' },
    deliveryTime: { type: Number },
    currentLocation: { type: String },
});

module.exports = mongoose.model('Delivery', deliverySchema);
