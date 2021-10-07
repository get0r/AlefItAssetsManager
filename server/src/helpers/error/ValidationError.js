const { BAD_REQUEST } = require('../constants/statusCodeConstants');
const BaseError = require('./BaseError');

module.exports = class ValidationError extends BaseError {
  constructor(description = 'Validation error') {
    super('Validation Error', BAD_REQUEST, true, description);
  }
};
