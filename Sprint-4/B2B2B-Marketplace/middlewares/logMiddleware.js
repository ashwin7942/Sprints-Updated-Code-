const logMiddleware = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();  // Continue to the next middleware or controller
};

module.exports = logMiddleware;
