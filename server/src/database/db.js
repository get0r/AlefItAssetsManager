const mongoose = require('mongoose');

const config = require('../config/config');
const { appLogger } = require('../helpers/logger/appLogger');

const dbURI = `mongodb://${config.db.host}:${config.db.port}/${config.db.name}`;

const connectToDatabase = () => {
  mongoose.connect(dbURI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  });

  // handle connection events
  mongoose.connection.on('connecting', () => {
    appLogger.info('Connecting to the database...');
  });

  mongoose.connection.on('connected', () => {
    appLogger.info('Successfully Connected to the database...');
  });

  mongoose.connection.on('error', (error) => {
    appLogger.info(`Error while connecting to the database.\n Reason: ${error}`);
  });

  mongoose.connection.on('disconnected', () => {
    appLogger.info('Disconnected from the database...');
  });

  // If the Node process ends, close the Mongoose connection
  process.on('SIGINT', () => {
    mongoose.connection.close(() => {
      appLogger.info('Mongoose default connection disconnected through app termination');
      process.exit(0);
    });
  });
};

module.exports = connectToDatabase;
