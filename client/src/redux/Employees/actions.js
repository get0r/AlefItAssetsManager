import * as actionTypes from './actionTypes';
import * as ApiFunctions from '../../api/employee.api';
import { loadSuccess, loadFail } from '../rootActions';

// export const addCategory = (category) => {
//     return async dispatch => {
//         try {
//             const catReq = await ApiFunctions.createCategory(category);
//             const catData = catReq.data;
//             return dispatch(loadSuccess(actionTypes.ADD_CATEGORY_SUCCESS, catData.message));
//         } catch (error) {
//             if(error.response)
//                 return dispatch(loadFail(actionTypes.ADD_CATEGORY_FAIL, error.response.data.message));
//             return dispatch(loadFail(actionTypes.ADD_CATEGORY_FAIL, error.message));
//         }
//     };
// };

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