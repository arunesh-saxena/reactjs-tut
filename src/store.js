import {createStore, combineReducers, applyMiddleware} from "redux";
import logger from "redux-logger";
// import thunk from 'react-thunk';/* not working */
import thunk from 'redux-thunk';

import math from './reducers/mathReducer';
import userReducer from './reducers/userReducer';
import toastReducers from './reducers/toastReducer';
import restroReducers from './reducers/restroReducer';

const storeReducers = {
    math: math,
    user: userReducer,
    toast: toastReducers,
    restro: restroReducers
}

const store = createStore(combineReducers(storeReducers), {}, applyMiddleware(logger, thunk));

export default store;