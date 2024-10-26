const Delivery = require('../models/Delivery');
const Driver = require('../models/Driver');

exports.getDeliveryAnalytics = async (req, res) => {
    try {
        const deliveryData = await Delivery.aggregate([
            {
                $group: {
                    _id: '$status',
                    count: { $sum: 1 },
                    avgDeliveryTime: { $avg: '$deliveryTime' },
                },
            },
        ]);
        res.status(200).json(deliveryData);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching delivery analytics', error: err });
    }
};

exports.getDriverPerformance = async (req, res) => {
    try {
        const driverData = await Driver.find();
        res.status(200).json(driverData);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching driver performance', error: err });
    }
};
