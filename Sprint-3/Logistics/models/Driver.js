const mongoose = require('mongoose');

const driverSchema = new mongoose.Schema({
    name: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    assignedRoute: { type: String },
    deliveriesCompleted: { type: Number, default: 0 },
    averageDeliveryTime: { type: Number, default: 0 },
});

module.exports = mongoose.model('Driver', driverSchema);
