const express = require('express');
const EmployeeController = require('../../controllers/employee.controller');

const employeeRouter = express.Router();

employeeRouter
  .post('/employees', EmployeeController.newEmployee);

employeeRouter
  .get('/employees', EmployeeController.getEmployees);

employeeRouter
  .get('/employees/:employeeId', EmployeeController.getEmployee);

employeeRouter
  .patch('/employees/:employeeId', EmployeeController.getEmployee);

employeeRouter
  .delete('/employees/:employeeId', EmployeeController.removeEmployee);

module.exports = employeeRouter;
