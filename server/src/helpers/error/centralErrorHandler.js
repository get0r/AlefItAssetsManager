const serverTerminator = require('../../utils/serverTerminator');
const { appLogger } = require('../logger/appLogger');
const BaseError = require('./BaseError');

const isErrorOperational = (err) => {
  if (err instanceof BaseError) {
    return err.isOperational;
  }
  return false;
};

const centralErrorHandler = (err) => {
  // assemble the error for logging
  const errorMessage = JSON.stringify({
    message: err.message,
    type: err.constructor.name,
  });

  if (isErrorOperational(err)) {
    appLogger.warn(errorMessage);
  } else {
    appLogger.error(errorMessage);
    //  send message notification email(sms).
    //  restart gracefully.
    serverTerminator();
  }
};

module.exports = centralErrorHandler;
