const Joi = require('joi');

const ApiError = require('./ApiError');
const ValidationError = require('./ValidationError');

/**
 * a method to catch errors by running sync functions.
 * @param {Function} fn asynchronous function to be wrapped under error handler.
 * @returns a function that can be run and checked for errors.
 */
const catchAsync = (fn) => (req, res, next) => {
  fn(req, res, next)
    .catch((err) => {
      switch (err.constructor) {
        case Joi.ValidationError:
          return next(new ValidationError(err.message));
        default:
          return next(new ApiError(err.message));
      }
    });
};

module.exports = catchAsync;
