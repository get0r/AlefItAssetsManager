import * as actionTypes from './actionTypes';
import * as ApiFunctions from '../../api/category.api';
import { loadSuccess } from '../rootActions';

export const loadCategoryCount = () => {
    return async dispatch => {
        try {
            const catReq = await ApiFunctions.getCategoryCount();
            const catCount = catReq.data;
            return dispatch(loadSuccess(actionTypes.LOAD_CATEGORY_COUNT, catCount.message));
        } catch (error) {
            console.log(error);
        }
    };
};