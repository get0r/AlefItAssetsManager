import * as actionTypes from './actionTypes';


const INITIAL_STATE = {
    employees: [],
    employeeCount: 0,
    loading: false,
    error: null,
};


export const employeesReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch(type) {
        case actionTypes.ADD_EMPLOYEE_SUCCESS:
            return {
                ...state,
                employees: [...state.employees, payload],
                error: null,
            };
        case actionTypes.ADD_EMPLOYEE_FAIL:
            return {
                ...state,
                error: payload,
            };
        case actionTypes.DELETE_EMPLOYEE_SUCCESS:
            return {
                ...state,
                employees: state.employees.filter(employee => employee._id !== payload._id),
                error: null,
            };
        case actionTypes.DELETE_EMPLOYEE_FAIL:
            return {
                ...state,
                error: payload,
            };
        case actionTypes.LOAD_EMPLOYEES_BEGIN:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case actionTypes.LOAD_EMPLOYEES_SUCCESS:
            return {
                ...state,
                employees: [...payload],
                loading: false,
                error: null,
            };
        case actionTypes.LOAD_EMPLOYEES_FAIL:
            return {
                ...state,
                loading: false,
                error: payload,
            };
        case actionTypes.LOAD_EMPLOYEE_COUNT:
            return {
                ...state,
                employeeCount: payload,
            };
        default:
            return state;
    }
};
