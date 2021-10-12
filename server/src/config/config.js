//  config file.
const env = process.env.NODE_ENV; // 'development' or 'production'

const development = {
  app: {
    port: parseInt(process.env.DEV_APP_PORT, 10) || 3048,
    tokenSecret: process.env.TOKEN_SECRET || 'THisVV35463464hlkHLKHN,MBGSJHK987*(',
    secureCookie: false,
    httpCookie: false,
  },
  db: {
    host: process.env.DEV_DB_HOST || 'localhost',
    port: parseInt(process.env.DEV_DB_PORT, 10) || 27017,
    name: process.env.DEV_DB_NAME || 'AlefItAssetManager_DEV_DB',
  },
};

const production = {
  app: {
    port: parseInt(process.env.PROD_APP_PORT, 10),
    tokenSecret: process.env.TOKEN_SECRET,
    secureCookie: true,
    httpCookie: true,
  },
  db: {
    host: process.env.PROD_DB_HOST,
    port: parseInt(process.env.PROD_DB_PORT, 10),
    name: process.env.PROD_DB_NAME,
  },
};

const config = {
  development,
  production,
};

module.exports = config[env];
