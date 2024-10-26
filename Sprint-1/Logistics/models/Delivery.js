const db = require('../config/db')();

const Delivery = {
  create: (data, callback) => {
    const query = `INSERT INTO Deliveries (orderId, driverId, currentLocation, status, estimatedDeliveryTime) VALUES (?, ?, ?, ?, ?)`;
    db.query(query, [data.orderId, data.driverId, data.currentLocation, data.status, data.estimatedDeliveryTime], callback);
  },

  update: (taskId, data, callback) => {
    const query = `UPDATE Deliveries SET currentLocation = ?, status = ?, estimatedDeliveryTime = ? WHERE id = ?`;
    db.query(query, [data.currentLocation, data.status, data.estimatedDeliveryTime, taskId], callback);
  },

  track: (orderId, callback) => {
    const query = `SELECT * FROM Deliveries WHERE orderId = ?`;
    db.query(query, [orderId], callback);
  }
};

module.exports = Delivery;
