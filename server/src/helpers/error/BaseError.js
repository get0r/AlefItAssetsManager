/**
 * Core Error class for the app.
 */
class BaseError extends Error {
  constructor(name, httpCode, isOperational, description) {
    super(description);
    //  setting new prototype if it was called with the new keyboard.
    Object.setPrototypeOf(this, new.target.prototype);
    this.name = name;
    this.httpCode = httpCode;
    this.isOperational = isOperational;

    Error.captureStackTrace(this);
  }
}

module.exports = BaseError;
