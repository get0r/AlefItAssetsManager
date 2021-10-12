import * as actionTypes from './actionTypes';
import * as ApiFunctions from '../../api/item.api';

import { loadBegin, loadFail, loadSuccess } from '../rootActions';

export const loadItems = () => {
    return async dispatch => {
        dispatch(loadBegin(actionTypes.LOAD_ITEMS_BEGIN));
        try {
            const itemsReq = await ApiFunctions.getAllItems();
            const items = itemsReq.data;
            return dispatch(loadSuccess(actionTypes.LOAD_ITEMS_SUCCESS, items.message));
        } catch (error) {
            dispatch(loadFail(actionTypes.LOAD_ITEMS_FAIL, error.response.data.message));
        }
    };
};