import * as actionTypes from './actionTypes';
import * as ApiFunctions from '../../api/admin.api';

import { loadBegin, loadFail, loadSuccess } from '../rootActions';

export const setUpAdminAccount = admin => {
    return async dispatch => {
        dispatch(loadBegin(actionTypes.ADMIN_SIGNUP_BEGIN));
        let adminReq;
        try {
            adminReq = await ApiFunctions.signUpAdmin(admin);
            const adminData = adminReq.data;
            if(adminData.success) {
                return dispatch(loadSuccess(actionTypes.ADMIN_SIGNUP_SUCCESS, adminData.message));
            }
        } catch (error) {
            dispatch(loadFail(actionTypes.ADMIN_SIGNUP_FAIL, error.response.data.message));
        }
    };
};