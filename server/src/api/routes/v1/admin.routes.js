const express = require('express');

const AdminController = require('../../controllers/admin.controller');
const authAdmin = require('../../middlewares/auth/user.auth');

const adminRouter = express.Router();

adminRouter
  .post('/signUp', AdminController.setupAdminAccount);

adminRouter
  .post('/signIn', AdminController.adminSignIn);

adminRouter
  .post('/change-password', authAdmin, AdminController.changeAdminPassword);

adminRouter
  .get('/signOut', AdminController.signOut);

module.exports = adminRouter;
