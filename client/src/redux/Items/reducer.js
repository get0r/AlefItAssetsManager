import * as actionTypes from './actionTypes';

const INITIAL_STATE = {
    items: [],
    itemCount: 0,
    loading: false,
    error: null,
};


export const itemsReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch(type) {
        case actionTypes.ADD_ITEM_SUCCESS:
            return {
                ...state,
                items: [...state.items, payload],
                error: null,
            };
        case actionTypes.ADD_ITEM_FAIL:
            return {
                ...state,
                error: payload,
            };
        case actionTypes.DELETE_ITEM_SUCCESS:
            return {
                ...state,
                items: state.items.filter(item => item._id !== payload._id),
                error: null,
            };
        case actionTypes.DELETE_ITEM_FAIL:
            return {
                ...state,
                error: payload,
            };
        case actionTypes.UPDATE_ITEM_SUCCESS:
            const toBeUpdated = state.items.find(item => item._id === payload.itemId);
            const withOutUpdated = state.items.filter(item => item._id !== payload.itemId);
            const updated = {...toBeUpdated, ...payload.newObj };

            return {
                ...state,
                items: [...withOutUpdated, updated],
                error: null,
            };
        case actionTypes.UPDATE_ITEM_FAIL:
            return {
                ...state,
                error: payload,
            };
        case actionTypes.LOAD_ITEMS_BEGIN:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case actionTypes.LOAD_ITEMS_SUCCESS:
            return {
                ...state,
                items: [...state.items, ...payload],
                loading: false,
                error: null,
            };
        case actionTypes.LOAD_ITEMS_FAIL:
            return {
                ...state,
                loading: false,
                error: payload,
            };
        case actionTypes.LOAD_ITEM_COUNT:
            return {
                ...state,
                itemCount: payload,
            };
        default:
            return state;
    }
};