import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
// import thunk from 'react-thunk';/* not working */
import thunk from 'redux-thunk';

import math from './reducers/mathReducer';
import userReducer from './reducers/userReducer';
import toastReducers from './reducers/toastReducer';
const store = createStore(
    combineReducers({ math:math, user:userReducer, toast:toastReducers }),
    {},
    applyMiddleware( logger, thunk)
);

export default store;