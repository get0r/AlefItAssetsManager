import alefApiCreator from './AlefApi';
import { EMPLOYEES, EMPLOYEE_COUNT, withId } from './constants/ApiConstants';

const empApi = alefApiCreator();

export const getAllEmployees = () => empApi.get(EMPLOYEES);

export const getEmployeeCount = () => empApi.get(EMPLOYEE_COUNT);

export const getEmployee = (employeeId) => empApi.get(withId(employeeId, EMPLOYEES));

export const createEmployee = (employee) => empApi.post(EMPLOYEES, employee);

export const removeEmployee = (employeeId) => empApi.delete(withId(employeeId, EMPLOYEES));
