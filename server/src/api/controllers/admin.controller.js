/* eslint-disable no-underscore-dangle */
const _ = require('lodash');

const config = require('../../config/config');
const AdminServices = require('../../services/admin.service');
const catchAsync = require('../../helpers/error/catchAsyncError');

const { appLogger } = require('../../helpers/logger/appLogger');
const { sendSuccessResponse, sendErrorResponse } = require('../../utils/responseBuilder');
const { BAD_REQUEST } = require('../../helpers/constants/statusCodeConstants');

/**
 * a method to try to setup admin account on the first run by calling services function
 * and send response to the client
 * @param {*} req request object
 * @param {*} res response object
 * @param {*} next next routing function in the chain
 */
const setupAdminAccount = catchAsync(async (req, res) => {
  const adminData = req.body;
  const admin = await AdminServices.signUp(adminData);

  if (admin === null) {
    return sendErrorResponse(res, BAD_REQUEST, 'Admin Account already exists!');
  }
  const token = AdminServices.generateToken(admin._id, admin.username);
  //  place the token on the cookie and send the user
  res.cookie('token', token, { httpOnly: true, secure: config.app.secureCookie, sameSite: true });
  appLogger.info(`Admin account setup Successful adminId ${admin._id}`);

  return sendSuccessResponse(res, _.pick(admin, ['_id', 'fname', 'lname', 'username']));
});

/**
 * a method to try authenticate the admin by calling services function
 * and send response to the client
 * @param {*} req request object
 * @param {*} res response object
 * @param {*} next next routing function in the chain
 */
const adminSignIn = catchAsync(async (req, res) => {
  const adminData = req.body;
  const admin = await AdminServices.signIn(adminData);

  if (admin === null) {
    return sendErrorResponse(res, BAD_REQUEST, 'username or password incorrect!');
  }
  const token = AdminServices.generateToken(admin._id, admin.username);
  //  place the token on the cookie and send the user
  res.cookie('token', token, { httpOnly: true, secure: config.app.secureCookie, sameSite: true });
  appLogger.info(`Admin SignIn Successful adminId ${admin._id}`);

  return sendSuccessResponse(res, _.pick(admin, ['_id', 'fname', 'lname', 'username']));
});

/**
 * a method to try change password of the admin by calling services function
 * and send response to the client
 * @param {*} req request object
 * @param {*} res response object
 * @param {*} next next routing function in the chain
 */
const changeAdminPassword = catchAsync(async (req, res) => {
  const adminData = req.body;
  const admin = await AdminServices.changePassword(adminData);

  if (admin === null) {
    return sendErrorResponse(res, BAD_REQUEST, 'Admin Account Not Found!');
  }
  appLogger.info(`Admin Change Password Successful adminId ${admin._id}`);

  return sendSuccessResponse(res, _.pick(admin, ['_id', 'fname', 'lname', 'username']));
});

module.exports = {
  setupAdminAccount,
  adminSignIn,
  changeAdminPassword,
};
