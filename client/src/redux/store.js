import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createBrowserHistory } from 'history';
import thunk from "redux-thunk";

import createRootReducer from './rootReducers';
import { routerMiddleware } from "connected-react-router";

export const history = createBrowserHistory();

const store = createStore(
    createRootReducer(history),
    composeWithDevTools(
        applyMiddleware(
            routerMiddleware(history),
            thunk
        )
    )
);

export default store;
