export const loadBegin = actionType => {
    return {
        type: actionType,
    };
};

export const loadSuccess = (actionType, payload) => {
    return {
        type: actionType,
        payload
    };
};

export const loadFail = (actionType, error) => {
    return {
        type: actionType,
        payload: error
    };
};