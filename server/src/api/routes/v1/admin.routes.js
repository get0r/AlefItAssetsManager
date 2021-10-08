const express = require('express');

const AdminController = require('../../controllers/admin.controller');

const adminRouter = express.Router();

adminRouter
  .post('/signUp', AdminController.setupAdminAccount);

adminRouter
  .post('/signIn', AdminController.adminSignIn);

adminRouter
  .post('/change-password', (req, res) => res.send('signin'));

adminRouter
  .get('/signOut', (req, res) => res.send('signOut'));

module.exports = adminRouter;
