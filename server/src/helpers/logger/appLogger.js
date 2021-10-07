const winston = require('winston');
const morgan = require('morgan');

/**
 * logging format to format the message field to an appropriate json
 * since it's going to be string like "{\"message\": \"value\"}" ==> {"message": "value"}
 */
const logFormat = winston.format.printf(({
  level, message, timestamp,
}) => {
  const singleLineLog = JSON.stringify({
    level,
    timestamp,
    message,
  });

  //  replacing " before {'s and "'s preceded by \'s  when it's a json value.
  const replacedLog = singleLineLog.replace(':"{', ':{').replace('"}"', '"}').replace(/\\"/g, '"');
  return replacedLog;
});

const transportOptions = {
  file: {
    level: 'info',
    filename: '../logs/appLog.json',
    handleExceptions: true,
    format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.json(),
      logFormat,
    ),
    maxsize: 5242880,
    maxFiles: 5,
    colorize: false,
  },

  console: {
    level: 'debug',
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.splat(),
      winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss.SSS' }),
      winston.format.printf(({ timestamp, level, message }) => `${timestamp} [${level}]: ${message}`),
    ),
    handleExceptions: true,
    colorize: true,
  },
};

const loggerConfig = {
  levels: winston.config.npm.levels,
  transports: [
    new winston.transports.File(transportOptions.file),
    new winston.transports.Console(transportOptions.console),
  ],
  exitOnError: false,
};

//  core app logger.
const appLogger = winston.createLogger(loggerConfig);

//  a stream to get morgan logs to winston
const appLoggerStream = {
  write: (message) => {
    appLogger.info(message);
  },
};

//  http network logger.
const httpLogger = morgan('combined', { stream: appLoggerStream });

module.exports = {
  appLogger,
  httpLogger,
};
