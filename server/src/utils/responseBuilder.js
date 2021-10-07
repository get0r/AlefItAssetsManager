const { OK } = require('../helpers/constants/statusCodeConstants');

/**
 * a function to assemble and send error message to a client.
 * @param {*} res response object
 * @param {*} httpCode status code
 * @param {*} payload message to be sent to the client.
 */
const sendErrorResponse = (res, httpCode, payload) => res.status(httpCode).json({
  success: false,
  message: payload,
});

/**
 * a function to assemble and send success message to a client.
 * @param {*} res response object
 * @param {*} httpCode status code
 * @param {*} payload message to be sent to the client.
 */
const sendSuccessResponse = (res, payload) => res.status(OK).json({
  success: true,
  message: payload,
});

module.exports = {
  sendErrorResponse,
  sendSuccessResponse,
};
