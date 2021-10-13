import * as actionTypes from './actionTypes';

const INITIAL_STATE = {
    categories: [],
    categoryCount: 0,
    loading: false,
    error: null,
};


export const categoriesReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch(type) {
        case actionTypes.ADD_CATEGORY_SUCCESS:
            return {
                ...state,
                categories: [...state.categories, payload],
                error: null,
            };
        case actionTypes.ADD_CATEGORY_FAIL:
            return {
                ...state,
                error: payload,
            };
        case actionTypes.LOAD_CATEGORY_COUNT:
            return {
                ...state,
                categoryCount: payload,
            };
        default:
            return state;
    }
};