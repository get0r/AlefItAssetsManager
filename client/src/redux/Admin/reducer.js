import * as actionTypes from './actionTypes';

const INITIAL_STATE = {
    fname: '',
    lname: '',
    username: '',
    loading: false,
    error: null,
};


export const adminReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch(type) {
        case actionTypes.ADMIN_SIGNIN_BEGIN:
        case actionTypes.ADMIN_SIGNUP_BEGIN:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case actionTypes.ADMIN_SIGNUP_SUCCESS:
        case actionTypes.ADMIN_SIGNIN_SUCCESS:
            return {
                ...state,
                ...payload,
                loading: false,
                error: null,
            };
        case actionTypes.ADMIN_SIGNUP_FAIL:
        case actionTypes.ADMIN_SIGNIN_FAIL:
            return {
                ...state,
                loading: false,
                error: payload,
            };
        default:
            return state;
    }
};