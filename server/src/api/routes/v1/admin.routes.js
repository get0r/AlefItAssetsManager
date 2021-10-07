const express = require('express');

const adminRouter = express.Router();

adminRouter
  .post('/signUp', (req, res) => res.send('signup'));

adminRouter
  .post('/signIn', (req, res) => res.send('signin'));

adminRouter
  .post('/change-password', (req, res) => res.send('signin'));

adminRouter
  .get('/signOut', (req, res) => res.send('signOut'));

module.exports = adminRouter;
