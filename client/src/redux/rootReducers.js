import { combineReducers } from "redux";
import { connectRouter } from 'connected-react-router';

import { adminReducer } from './Admin/reducer';

const createRootReducer = history => combineReducers({
    router: connectRouter(history),
    admin: adminReducer,
});

export default createRootReducer;
