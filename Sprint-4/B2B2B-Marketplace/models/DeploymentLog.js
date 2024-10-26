const mongoose = require('mongoose');

const deploymentLogSchema = new mongoose.Schema({
    description: { type: String, required: true },
    status: { type: String, enum: ['Success', 'Failure'], required: true },
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('DeploymentLog', deploymentLogSchema);
