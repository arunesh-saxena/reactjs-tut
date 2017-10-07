import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
// import thunk from 'react-thunk';/* not working */
import thunk from 'redux-thunk';

import math from './reducers/mathReducer';
import user from './reducers/userReducer';
import toast from './reducers/toastReducer';

const store = createStore(
    combineReducers({ math, user, toast }),
    {},
    applyMiddleware( logger, thunk)
);

export default store;