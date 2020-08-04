import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import Register from './views/register/register';
import Login from './views/login/login';
import Home from './views/home/home';
import Profile from './views/profile/profile';

import history from './services/history/history';
import ProtectedRoute from './wrappers/ProtectedRoute';

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <ProtectedRoute path="/home" component={Home} exact />
        <ProtectedRoute path='/profile' component={Profile} exact />
        <Route component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
