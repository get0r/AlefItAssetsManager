import * as actionTypes from './actionTypes';
import * as ApiFunctions from '../../api/category.api';
import { loadSuccess, loadFail, loadBegin } from '../rootActions';

export const addCategory = (category) => {
    return async dispatch => {
        try {
            const catReq = await ApiFunctions.createCategory(category);
            const catData = catReq.data;
            return dispatch(loadSuccess(actionTypes.ADD_CATEGORY_SUCCESS, catData.message));
        } catch (error) {
            if(error.response)
                return dispatch(loadFail(actionTypes.ADD_CATEGORY_FAIL, error.response.data.message));
            return dispatch(loadFail(actionTypes.ADD_CATEGORY_FAIL, error.message));
        }
    };
};

export const deleteCategory = (catId) => {
    return async dispatch => {
        try {
            const catReq = await ApiFunctions.removeCategory(catId);
            const catData = catReq.data;
            return dispatch(loadSuccess(actionTypes.DELETE_CATEGORY_SUCCESS, catData.message));
        } catch (error) {
            if(error.response)
                return dispatch(loadFail(actionTypes.DELETE_CATEGORY_FAIL, error.response.data.message));
            return dispatch(loadFail(actionTypes.DELETE_CATEGORY_FAIL, error.message));
        }
    };
};


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

export const loadCategories = () => {
    return async dispatch => {
        dispatch(loadBegin(actionTypes.LOAD_CATEGORIES_BEGIN));
        try {
            const catReq = await ApiFunctions.getAllCategories();
            const catData = catReq.data;
            return dispatch(loadSuccess(actionTypes.LOAD_CATEGORIES_SUCCESS, catData.message));
        } catch (error) {
            if(error.response)
                return dispatch(loadFail(actionTypes.LOAD_CATEGORIES_FAIL, error.response.data.message));
            return dispatch(loadFail(actionTypes.LOAD_CATEGORIES_FAIL, error.message));
        }
    };
};