const JWT = require('jsonwebtoken');

const config = require('../config/config');
const AdminModel = require('../database/models/admin.model');

const { hashString, compareHash } = require('../utils/hashGenerator');

/**
 * a method to attempt to write admin data to database and return the written object.
 * or throw an error in times of error.
 * @param {Object} param0 user details.
 */
const signUp = async ({
  fname, lname, username, password,
}) => {
  const adminExits = await AdminModel.countDocuments().lean();
  //   admin account has been setup already
  if (adminExits) {
    return null;
  }
  const hashedPassword = await hashString(password);
  const admin = new AdminModel({
    fname,
    lname,
    username,
    password: hashedPassword,
  });
  const savedAdmin = await admin.save();

  return savedAdmin;
};

/**
 * a method to attempt to auth admin by checking the availability
 * of the admin username and the associated password.
 * or throw an error in times of error.
 * @param {Object} param0 user details.
 */
const signIn = async ({ username, password }) => {
  const admin = await AdminModel.findOne({ username }).lean();
  //   user doesn't exist so stop proceeding.
  if (!admin) {
    return null;
  }

  const isPasswordRight = await compareHash(password, admin.password);

  if (!isPasswordRight) {
    return null;
  }

  return admin;
};

/**
 * a method to generate a JWT token by signing userId and username of the admin a payload.
 * @param {String} userId unique id of the user on the database
 * @param {String} username username of the user
 */
const generateToken = (userId, username) => {
  const payload = { id: userId, username };
  return JWT.sign(payload, config.app.tokenSecret, { expiresIn: '48h' });
};

module.exports = {
  signUp,
  signIn,
  generateToken,
};
