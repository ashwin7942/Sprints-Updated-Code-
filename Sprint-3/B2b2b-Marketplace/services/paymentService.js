const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.createPaymentIntent = async (orderId, amount) => {
    return await stripe.paymentIntents.create({
        amount,
        currency: 'usd',
        metadata: { orderId },
    });
};

exports.confirmPayment = async (paymentId) => {
    return await stripe.paymentIntents.confirm(paymentId);
};
