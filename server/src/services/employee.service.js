const EmployeeModel = require('../database/models/employee.model');

/**
 * a method to create a new Employee record in the database.
 * @param {String} param0 employee details line name..,
 * @returns savedEmployee if saving to db successful or null if not
 */
const createEmployee = async ({
  fname, lname, jobTitle, dept, empId,
}) => {
  const employeeExists = await EmployeeModel.findOne({ empId }).lean();

  if (employeeExists) {
    return null;
  }

  const newEmployee = await new EmployeeModel({
    fname,
    lname,
    jobTitle,
    dept,
    empId,
  }).save();

  return newEmployee;
};

/**
 * a method to retrieve an employee by its db id.
 * @param {String} empId employee id
 * @returns retrieved employee- might be empty
 */
const getEmployeeById = async (empId) => {
  const employee = await EmployeeModel.findOne({ empId }).lean();

  if (!employee) {
    return null;
  }

  return employee;
};

/**
 * a method to retrieve all employees.
 * @returns retrieved employees- might be empty
 */
const getAllEmployees = async () => {
  const employees = await EmployeeModel.find().lean();
  if (!employees) {
    return [];
  }
  return employees;
};

/**
 * a method to delete employee record from db using its id.
 * @param {String} empId employee id
 * @returns removed employee- might be empty
 */
const removeEmployeeById = async (empId) => {
  const toBeRemoved = await getEmployeeById(empId);
  if (!toBeRemoved) {
    return null;
  }
  const removedEmployee = await EmployeeModel.deleteOne({ empId }).lean();
  if (!removedEmployee) {
    return null;
  }

  return toBeRemoved;
};

/**
 * a method to update employee record i.e items in the record from db using its id.
 * @param {String} empId employee id
 * @param {Object} updatedObject an object containing new item values to be updated
 * @returns updated employee
 */
const updateEmployeeById = async (empId, updatedObject) => {
  const toBeUpdated = await getEmployeeById(empId);
  if (!toBeUpdated) {
    return null;
  }
  const updatedEmployee = await EmployeeModel
    .updateOne({ empId }, { $set: updatedObject }).lean();
  if (!updatedEmployee) {
    return null;
  }
  return true;
};

module.exports = {
  createEmployee,
  getAllEmployees,
  getEmployeeById,
  removeEmployeeById,
  updateEmployeeById,
};
