const mongoose = require('mongoose');

const deliverySchema = new mongoose.Schema({
    orderId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Order' },
    driverId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Driver' },
    status: { type: String, enum: ['Pending', 'In Transit', 'Delivered'], default: 'Pending' },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date },
});

deliverySchema.pre('save', function(next) {
    this.updatedAt = Date.now();
    next();
});

module.exports = mongoose.model('Delivery', deliverySchema);
