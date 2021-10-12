import * as actionTypes from './actionTypes';

const INITIAL_STATE = {
    items: [],
    loading: false,
    error: null,
};


export const itemsReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch(type) {
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
        default:
            return state;
    }
};