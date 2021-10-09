const catchAsync = require('../../helpers/error/catchAsyncError');

const EmployeeService = require('../../services/employee.service');
const { sendErrorResponse, sendSuccessResponse } = require('../../utils/responseBuilder');
const { BAD_REQUEST, NOT_FOUND } = require('../../helpers/constants/statusCodeConstants');

/**
 * a method to try add new employee by calling services function
 * and send response to the client
 * @param {Object} req request object
 * @param {Object} res response object
 */
const newEmployee = catchAsync(async (req, res) => {
  const employee = req.body;

  const savedEmployee = await EmployeeService.createEmployee(employee);

  if (!savedEmployee) {
    return sendErrorResponse(res, BAD_REQUEST, 'Employee with the associated employee id already exists');
  }

  return sendSuccessResponse(res, savedEmployee);
});

/**
 * a method to get employee by it's id (controller) by calling service functions
 * and send response to the client
 * @param {Object} req request object
 * @param {Object} res response object
 */
const getEmployee = catchAsync(async (req, res) => {
  const employee = await EmployeeService.getEmployeeById(req.params.employeeId);

  if (!employee) {
    return sendErrorResponse(res, NOT_FOUND, 'Employee Not Found!');
  }

  return sendSuccessResponse(res, employee);
});

/**
 * a method to get employees by it's id (controller) by calling service functions
 * and send response to the client
 * @param {Object} req request object
 * @param {Object} res response object
 */
const getEmployees = catchAsync(async (req, res) => {
  const employees = await EmployeeService.getAllEmployees();

  return sendSuccessResponse(res, employees);
});

/**
 * a method to delete employee item.
 * and send response to the client
 * @param {Object} req request object
 * @param {Object} res response object
 */
const removeEmployee = catchAsync(async (req, res) => {
  const removedEmp = await EmployeeService.removeEmployeeById(req.params.employeeId);
  if (!removedEmp) {
    return sendErrorResponse(res, NOT_FOUND, 'Couldn\'t find Employee');
  }
  return sendSuccessResponse(res, removedEmp);
});

module.exports = {
  newEmployee,
  getEmployees,
  getEmployee,
  removeEmployee,
};
