const firebaseAdmin = require('firebase-admin');

firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.applicationDefault(),
});

exports.send = async (userId, message) => {
    const payload = {
        notification: {
            title: 'New Notification',
            body: message,
        },
        token: userId,
    };
    return await firebaseAdmin.messaging().send(payload);
};

exports.getNotifications = async (userId) => {
    // Implement logic to retrieve notifications from the database
};
