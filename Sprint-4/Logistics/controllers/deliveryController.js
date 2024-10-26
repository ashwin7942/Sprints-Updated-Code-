const Delivery = require('../models/Delivery');

exports.createDelivery = async (req, res) => {
    const { orderId, driverId, status } = req.body;
    try {
        const delivery = new Delivery({ orderId, driverId, status });
        const savedDelivery = await delivery.save();
        res.status(201).json(savedDelivery);
    } catch (err) {
        res.status(500).json({ message: 'Error creating delivery', error: err });
    }
};

exports.acceptDelivery = async (req, res) => {
    try {
        const delivery = await Delivery.findById(req.params.id);
        if (!delivery) return res.status(404).json({ message: 'Delivery not found' });

        delivery.status = 'In Transit';
        const updatedDelivery = await delivery.save();
        res.status(200).json(updatedDelivery);
    } catch (err) {
        res.status(500).json({ message: 'Error accepting delivery', error: err });
    }
};

exports.updateDelivery = async (req, res) => {
    try {
        const delivery = await Delivery.findById(req.params.id);
        if (!delivery) return res.status(404).json({ message: 'Delivery not found' });

        delivery.status = req.body.status;
        const updatedDelivery = await delivery.save();
        res.status(200).json(updatedDelivery);
    } catch (err) {
        res.status(500).json({ message: 'Error updating delivery', error: err });
    }
};
