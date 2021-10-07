const express = require('express');

const employeeRouter = express.Router();

employeeRouter
  .post('/employees', (req, res) => res.send('new employee'));

employeeRouter
  .get('/employees', (req, res) => res.send('all employees'));

employeeRouter
  .get('/employees/:employeeId', (req, res) => res.send('single employee'));

employeeRouter
  .get('/employees/:employeeId', (req, res) => res.send('update employee'));

employeeRouter
  .delete('/employees/:employeeId', (req, res) => res.send('delete employee'));

module.exports = employeeRouter;
