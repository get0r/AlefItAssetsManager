const mongoose = require('mongoose');
const { appLogger } = require('../helpers/logger/appLogger');

/**
 * a method to shutdown the server gracefully.
 * @param {Number} code exit code
 */
const serverTerminator = () => {
  global.server.close((err) => {
    appLogger.info('Shutting down server gracefully due to error...');
    if (err) {
      appLogger.error(err.message);
      process.exit(1);
    }

    mongoose.connection.close(() => {
      process.exit(0);
    });
  });
};

module.exports = serverTerminator;
