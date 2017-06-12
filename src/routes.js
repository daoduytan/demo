import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import App from './container/App';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

export default (
    <Router path="/" history={browserHistory}>
        <Route path="/app" component={App}/>
        <Route path="/signin" component={SignIn}/>
        <Route path="/signup" component={SignUp}/>
    </Router>
)
