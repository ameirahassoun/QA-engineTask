import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './mainPage.js';
import Login from './login.js';
import Signup from './signup.js';

class Router extends React.Component {
    render () {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Main} />
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/signup' component={Signup} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Router;