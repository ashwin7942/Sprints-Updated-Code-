const db = require('../config/db')();

const Route = {
  createOptimizedRoute: (taskId, routeData, callback) => {
    const query = `INSERT INTO Routes (taskId, routeDetails) VALUES (?, ?)`;
    db.query(query, [taskId, JSON.stringify(routeData)], callback);
  },

  getOptimizedRoute: (taskId, callback) => {
    const query = `SELECT routeDetails FROM Routes WHERE taskId = ?`;
    db.query(query, [taskId], callback);
  }
};

module.exports = Route;
