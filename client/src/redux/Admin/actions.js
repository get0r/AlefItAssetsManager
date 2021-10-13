import * as actionTypes from './actionTypes';
import * as ApiFunctions from '../../api/admin.api';

import { loadBegin, loadFail, loadSuccess } from '../rootActions';

export const setUpAdminAccount = admin => {
    return async dispatch => {
        dispatch(loadBegin(actionTypes.ADMIN_SIGNUP_BEGIN));
        try {
            const adminReq = await ApiFunctions.signUpAdmin(admin);
            const adminData = adminReq.data;
            if(adminData.success) {
                return dispatch(loadSuccess(actionTypes.ADMIN_SIGNUP_SUCCESS, adminData.message));
            }
        } catch (error) {
            dispatch(loadFail(actionTypes.ADMIN_SIGNUP_FAIL, error.response.data.message));
        }
    };
};

export const AdminSignIn = admin => {
    return async dispatch => {
        dispatch(loadBegin(actionTypes.ADMIN_SIGNIN_BEGIN));
        try {
            const adminReq = await ApiFunctions.signInAdmin(admin);
            const adminData = adminReq.data;

            return dispatch(loadSuccess(actionTypes.ADMIN_SIGNIN_SUCCESS, adminData.message));
        } catch (error) {
            dispatch(loadFail(actionTypes.ADMIN_SIGNIN_FAIL, error.response.data.message));
        }
    };
};

export const AdminSignOut = () => {
    return async dispatch => {
        try {
            await ApiFunctions.signOutAdmin();
            dispatch(loadBegin(actionTypes.ADMIN_SIGNOUT));
            return window.location.reload();
        } catch (error) {
            console.log(error);
        }
    };
};