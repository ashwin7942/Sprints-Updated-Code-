const DeploymentLog = require('../models/DeploymentLog');

exports.addDeploymentLog = async (req, res) => {
    const { description, status } = req.body;
    try {
        const log = new DeploymentLog({ description, status });
        await log.save();
        res.status(201).json({ message: 'Deployment log added', log });
    } catch (err) {
        res.status(500).json({ message: 'Error adding deployment log', error: err });
    }
};

exports.getDeploymentLogs = async (req, res) => {
    try {
        const logs = await DeploymentLog.find();
        res.status(200).json(logs);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching deployment logs', error: err });
    }
};
