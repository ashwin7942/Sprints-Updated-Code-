const paymentService = require('../services/paymentService');

exports.initiatePayment = async (req, res) => {
    const { orderId, amount } = req.body;
    try {
        const paymentIntent = await paymentService.createPaymentIntent(orderId, amount);
        res.status(200).json(paymentIntent);
    } catch (err) {
        res.status(500).json({ message: 'Payment initiation failed', error: err });
    }
};

exports.confirmPayment = async (req, res) => {
    const { paymentId } = req.body;
    try {
        const paymentConfirmation = await paymentService.confirmPayment(paymentId);
        res.status(200).json(paymentConfirmation);
    } catch (err) {
        res.status(500).json({ message: 'Payment confirmation failed', error: err });
    }
};
