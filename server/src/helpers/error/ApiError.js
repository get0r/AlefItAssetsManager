const { INTERNAL_SERVER } = require('../constants/statusCodeConstants');
const BaseError = require('./BaseError');

module.exports = class ApiError extends BaseError {
  constructor(description = 'internal server error') {
    super('API Error', INTERNAL_SERVER, true, description);
  }
};
