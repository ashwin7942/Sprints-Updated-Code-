const notificationService = require('../services/notificationService');

exports.sendNotification = async (req, res) => {
    const { userId, message } = req.body;
    try {
        await notificationService.send(userId, message);
        res.status(200).json({ message: 'Notification sent' });
    } catch (err) {
        res.status(500).json({ message: 'Notification failed', error: err });
    }
};

exports.getNotifications = async (req, res) => {
    const { userId } = req.params;
    try {
        const notifications = await notificationService.getNotifications(userId);
        res.status(200).json(notifications);
    } catch (err) {
        res.status(500).json({ message: 'Failed to retrieve notifications', error: err });
    }
};
