import { combineReducers } from "redux";
import { connectRouter } from 'connected-react-router';

import { adminReducer } from './Admin/reducer';
import { itemsReducer } from './Items/reducer';

const createRootReducer = history => combineReducers({
    router: connectRouter(history),
    admin: adminReducer,
    items: itemsReducer,
});

export default createRootReducer;
