import React from 'react';
import {render} from 'react-dom';
import {createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {browserHistory } from 'react-router';
import {firebaseApp} from './firebase';
import reducer from './reducers';
import {logUser} from './actions';
import routes from './routes';

import './style.css';

const store = createStore(reducer, applyMiddleware(thunk));

firebaseApp.auth().onAuthStateChanged(user => {
    if(user) {
        let {email} = user;
        store.dispatch(logUser(email));
        browserHistory.push('/app');
    } else {
        browserHistory.push('/signin');
    }
})

const app = <Provider store={store}>{routes}</Provider> 

render(app,document.getElementById('root'))
