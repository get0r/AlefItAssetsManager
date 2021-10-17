import * as actionTypes from './actionTypes';
import * as ApiFunctions from '../../api/item.api';

import { loadBegin, loadFail, loadSuccess } from '../rootActions';

export const addItem = (item) => {
    return async dispatch => {
        try {
            const itemReq = await ApiFunctions.createItem(item);
            const itemData = itemReq.data;
            return dispatch(loadSuccess(actionTypes.ADD_ITEM_SUCCESS, itemData.message));
        } catch (error) {
            if(error.response)
                return dispatch(loadFail(actionTypes.ADD_ITEM_FAIL, error.response.data.message));
            return dispatch(loadFail(actionTypes.ADD_ITEM_FAIL, error.message));
        }
    };
};

export const deleteItem = (itemId) => {
    return async dispatch => {
        try {
            const itemReq = await ApiFunctions.removeItem(itemId);
            const itemData = itemReq.data;
            return dispatch(loadSuccess(actionTypes.DELETE_ITEM_SUCCESS, itemData.message));
        } catch (error) {
            if(error.response)
                return dispatch(loadFail(actionTypes.DELETE_ITEM_FAIL, error.response.data.message));
            return dispatch(loadFail(actionTypes.DELETE_ITEM_FAIL, error.message));
        }
    };
};

export const updateItem = (itemId, newObj) => {
    console.log('in actons');
    return async dispatch => {
        try {
            await ApiFunctions.updateItem(itemId, newObj);
            return dispatch(loadSuccess(actionTypes.UPDATE_ITEM_SUCCESS, {itemId, newObj}));
        } catch (error) {
            if(error.response)
                return dispatch(loadFail(actionTypes.UPDATE_ITEM_FAIL, error.response.data.message));
            return dispatch(loadFail(actionTypes.UPDATE_ITEM_FAIL, error.message));
        }
    };
};

export const loadItems = () => {
    return async dispatch => {
        dispatch(loadBegin(actionTypes.LOAD_ITEMS_BEGIN));
        try {
            const itemsReq = await ApiFunctions.getAllItems();
            const items = itemsReq.data;
            return dispatch(loadSuccess(actionTypes.LOAD_ITEMS_SUCCESS, items.message));
        } catch (error) {
            if(error.response)
                return dispatch(loadFail(actionTypes.LOAD_ITEMS_FAIL, error.response.data.message));
            return dispatch(loadFail(actionTypes.LOAD_ITEMS_FAIL, error.message));

        }
    };
};


export const loadItemCount = () => {
    return async dispatch => {
        try {
            const itemsReq = await ApiFunctions.getItemCount();
            const itemCount = itemsReq.data;
            return dispatch(loadSuccess(actionTypes.LOAD_ITEM_COUNT, itemCount.message));
        } catch (error) {
            console.log(error);
        }
    };
};