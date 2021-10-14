import { combineReducers } from "redux";
import { connectRouter } from 'connected-react-router';

import { adminReducer } from './Admin/reducer';
import { itemsReducer } from './Items/reducer';
import { categoriesReducer } from './Categories/reducer';
import { employeesReducer } from './Employees/reducer';

const createRootReducer = history => combineReducers({
    router: connectRouter(history),
    admin: adminReducer,
    items: itemsReducer,
    categories: categoriesReducer,
    employees: employeesReducer,
});

export default createRootReducer;
