import * as actionTypes from './actionTypes';
import * as ApiFunctions from '../../api/employee.api';
import { loadSuccess, loadFail, loadBegin } from '../rootActions';


export const addEmployee = (employee) => {
    return async dispatch => {
        try {
            const empReq = await ApiFunctions.createEmployee(employee);
            const empData = empReq.data;
            return dispatch(loadSuccess(actionTypes.ADD_EMPLOYEE_SUCCESS, empData.message));
        } catch (error) {
            if(error.response)
                return dispatch(loadFail(actionTypes.ADD_EMPLOYEE_FAIL, error.response.data.message));
            return dispatch(loadFail(actionTypes.ADD_EMPLOYEE_FAIL, error.message));
        }
    };
};

export const loadEmployees = () => {
    return async dispatch => {
        dispatch(loadBegin(actionTypes.LOAD_EMPLOYEES_BEGIN));
        try {
            const empReq = await ApiFunctions.getAllEmployees();
            const empData = empReq.data;
            return dispatch(loadSuccess(actionTypes.LOAD_EMPLOYEES_SUCCESS, empData.message));
        } catch (error) {
            if(error.response)
                return dispatch(loadFail(actionTypes.LOAD_EMPLOYEES_FAIL, error.response.data.message));
            return dispatch(loadFail(actionTypes.LOAD_EMPLOYEES_FAIL, error.message));
        }
    };
};

export const loadEmployeeCount = () => {
    return async dispatch => {
        try {
            const empReq = await ApiFunctions.getEmployeeCount();
            const empCount = empReq.data;
            return dispatch(loadSuccess(actionTypes.LOAD_EMPLOYEE_COUNT, empCount.message));
        } catch (error) {
            console.log(error);
        }
    };
};
