import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './mainPage.js';
import Login from './login.js';
import Signup from './signup.js';
import Admin from './admin';

class Router extends React.Component {
    render () {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Signup} />
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/signup' component={Signup} />
                    <Route exact path='/main' component={Main} />
                    <Route exact path='/admin' component={Admin} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Router;