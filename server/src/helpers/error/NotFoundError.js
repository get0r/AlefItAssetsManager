const { NOT_FOUND } = require('../constants/statusCodeConstants');
const BaseError = require('./BaseError');

module.exports = class NotFoundError extends BaseError {
  constructor(description = 'not found error') {
    super('Not Found Error', NOT_FOUND, true, description);
  }
};
