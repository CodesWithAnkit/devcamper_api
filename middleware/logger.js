// Middleware
// @desc    logs request to console
const logger = (req, res, next) => {
  console.log(
    `${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl}` //Inportant line for defining the middleware
  );
  next();
};

module.exports = logger;
