const firebaseAdmin = require('firebase-admin');

firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.applicationDefault(),
});

const sendNotification = async (userId, message) => {
    const payload = {
        notification: {
            title: 'Delivery Update',
            body: message,
        },
        token: userId,
    };

    return await firebaseAdmin.messaging().send(payload);
};

module.exports = sendNotification;
