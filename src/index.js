import React from 'react';
import ReactDOM from 'react-dom';

import App from './containers/app';
import registerServiceWorker from './registerServiceWorker';

import  _ from 'lodash';

import 'tether/dist/js/tether.js';
import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap-theme.css';


import './App.css';


import { Provider } from 'react-redux';
import store from './store';
// import math from './reducers/mathReducer';
// import user from './reducers/userReducer';


// store.dispatch({
//     type: 'ADD',
//     payload: 100
// })
// store.dispatch({
//     type: 'ADD',
//     payload: 22
// })

// store.dispatch({
//     type: 'SUBTRACT',
//     payload: 80
// })
// store.dispatch({
//     type: 'SET_AGE',
//     payload: 30
// })


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();