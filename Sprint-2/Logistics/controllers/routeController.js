const Route = require('../models/Route');
const axios = require('axios'); // For external API calls (e.g., Google Maps)

// Optimize delivery route using an external service (e.g., Google Maps)
exports.optimizeRoute = async (req, res, next) => {
  try {
    const { locations } = req.body;

    if (!locations || !Array.isArray(locations)) {
      return res.status(400).json({ message: 'Invalid location data' });
    }

    // Call to external API for route optimization (e.g., Google Maps API)
    const response = await axios.post('https://maps.googleapis.com/maps/api/route-optimization', {
      locations,
    });

    const optimizedRoute = response.data;

    // Store the optimized route in the database
    Route.createOptimizedRoute(req.body.taskId, optimizedRoute, (err, result) => {
      if (err) return next(err);
      res.status(200).json({ success: true, data: optimizedRoute });
    });
  } catch (err) {
    next(err);
  }
};

// Get an optimized route for a specific task
exports.getOptimizedRoute = (req, res, next) => {
  const { taskId } = req.params;

  Route.getOptimizedRoute(taskId, (err, result) => {
    if (err) return next(err);
    if (!result.length) return res.status(404).json({ message: 'Route not found' });

    res.status(200).json({ success: true, data: JSON.parse(result[0].routeDetails) });
  });
};
