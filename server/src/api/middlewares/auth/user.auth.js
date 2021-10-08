const JWT = require('jsonwebtoken');

const catchAsync = require('../../../helpers/error/catchAsyncError');
const config = require('../../../config/config');
const { NOT_FOUND } = require('../../../helpers/constants/statusCodeConstants');
const { appLogger } = require('../../../helpers/logger/appLogger');
const { sendErrorResponse } = require('../../../utils/responseBuilder');

/**
 * a method to authenticate a admin from jwt token and set props on the request object.
 * @param {Object} req request object
 * @param {Object} res response object
 * @param {Function} next the next endpoint function in the middleware chain
 * @returns the result of the next endpoint function
 */
const authAdmin = catchAsync(async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) return sendErrorResponse(res, NOT_FOUND, 'Sign in first!');

  const verifiedAdmin = await JWT.verify(token, config.app.tokenSecret);
  if (!verifiedAdmin) return sendErrorResponse(res, NOT_FOUND, 'Unauthorized Access.');

  req.adminId = verifiedAdmin.id;
  req.userName = verifiedAdmin.username;
  appLogger.info(`Authentication successful for admin with id ${verifiedAdmin.id}`);

  return next();
});

module.exports = authAdmin;
