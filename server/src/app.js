const express = require('express');
const mongoSanitize = require('express-mongo-sanitize');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const compression = require('compression');
const helmet = require('helmet');

const NotFoundError = require('./helpers/error/NotFoundError');
const { httpLogger } = require('./helpers/logger/appLogger');

const errorHandler = require('./api/middlewares/error/errorHandler');
const clientErrorHandler = require('./api/middlewares/error/clientErrorHandler');
const connectToDatabase = require('./database/db');

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

//  gzip for response compression.
app.use(compression());

//  helmet for header security.
app.use(helmet());

app.use(cors());
app.options('*', cors());

//  strip any database related chars from requests for security.
app.use(mongoSanitize());

//  cookie to req.cookies.
app.use(cookieParser());

connectToDatabase();

//  network traffic logger.
app.use(httpLogger);

//  connect all app routes version 1.
app.use('/api/v1', require('./api/routes/v1'));

app.all('*', (req, res, next) => {
  next(
    new NotFoundError(`path ${req.originalUrl} not found.`),
  );
});

//  central error handler middleware.
app.use(errorHandler);

//  client response sender middleware in time of error.
app.use(clientErrorHandler);

module.exports = app;
