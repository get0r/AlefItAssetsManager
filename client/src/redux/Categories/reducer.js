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
        case actionTypes.DELETE_CATEGORY_SUCCESS:
            return {
                ...state,
                categories: state.categories.filter(cat => cat._id !== payload._id),
                error: null,
            };
        case actionTypes.DELETE_CATEGORY_FAIL:
            return {
                ...state,
                error: payload,
            };
        case actionTypes.LOAD_CATEGORIES_BEGIN:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case actionTypes.LOAD_CATEGORIES_SUCCESS:
            return {
                ...state,
                categories: [...payload],
                loading: false,
                error: null,
            };
        case actionTypes.LOAD_CATEGORIES_FAIL:
            return {
                ...state,
                loading: false,
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