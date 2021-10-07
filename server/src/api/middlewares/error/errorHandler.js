const centralErrorHandler = require('../../../helpers/error/centralErrorHandler');

/**
 * error handling middleware to identify and handle errors.
 * @param {*} err error object
 * @param {*} req request object
 * @param {*} res response object
 */
const errorHandler = (err, req, res, next) => {
  centralErrorHandler(err);
  //  continue to the client error handler.
  return next(err);
};

module.exports = errorHandler;
