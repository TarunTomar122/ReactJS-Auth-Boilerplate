import React from 'react';
import { Router, Route } from 'react-router-dom';

import Register from './views/register/register';
import Login from './views/login/login';
import Home from './views/home/home';

import history from './services/history/history';
import ProtectedRoute from './wrappers/ProtectedRoute';

function App() {
  return (
    <Router history={history}>
      <ProtectedRoute path="/home" component={Home} exact />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
    </Router>
  );
}

export default App;
