const JWT = require('jsonwebtoken');

const catchAsync = require('../../../helpers/error/catchAsyncError');
const config = require('../../../config/config');
const { NOT_FOUND } = require('../../../helpers/constants/statusCodeConstants');
const { appLogger } = require('../../../helpers/logger/appLogger');
const { sendErrorResponse } = require('../../../utils/responseBuilder');

/**
 * a method to authenticate a user from jwt token and set props on the request object.
 * @param {Object} req request object
 * @param {Object} res response object
 * @param {Function} next the next endpoint function in the middleware chain
 * @returns the result of the next endpoint function
 */
const authUser = catchAsync(async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) return sendErrorResponse(res, NOT_FOUND, 'Sign in first!');

  const verifiedUser = await JWT.verify(token, config.app.tokenSecret);
  if (!verifiedUser) return sendErrorResponse(res, NOT_FOUND, 'Unauthorized Access.');

  req.userId = verifiedUser.id;
  req.username = verifiedUser.username;
  appLogger.info(`Authentication successful for user with id ${verifiedUser.id}`);

  return next();
});

module.exports = authUser;
