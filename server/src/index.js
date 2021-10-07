const app = require('./app');
const config = require('./config/config');

const centralErrorHandler = require('./helpers/error/centralErrorHandler');
const serverTerminator = require('./utils/serverTerminator');
const { appLogger } = require('./helpers/logger/appLogger');

const PORT = config.app.port;

global.server = app.listen(PORT, () => {
  appLogger.info(`App Started and Listening on port ${PORT}`);
});

//  handle programmer errors (non-operational).
process.on('uncaughtException', (err) => centralErrorHandler(err));

process.on('unhandledRejection', (err) => centralErrorHandler(err));

//  on receiving a terminate signal.
process.on('SIGTERM', () => {
  appLogger.info(`process ${process.pid} received terminate SIGTERM signal exiting...`);
  serverTerminator();
});

//  on receiving an interrupted signal.
process.on('SIGINT', () => {
  appLogger.info(`process ${process.pid} received interrupt SIGINT signal exiting...`);
  serverTerminator();
});
