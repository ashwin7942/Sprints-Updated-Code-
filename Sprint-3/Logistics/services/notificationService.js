const Notification = require('../models/Notification');
const sendNotification = require('../utils/sendNotification');

exports.send = async (userId, message) => {
    const payload = {
        userId,
        message,
        createdAt: new Date(),
    };

    // Save the notification to the database
    await Notification.create(payload);

    // Send real-time notification using Firebase or another service
    return await sendNotification(userId, message);
};

exports.getNotificationsByDelivery = async (deliveryId) => {
    return await Notification.find({ deliveryId });
};
