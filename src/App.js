import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Register from './views/register/register';
import Login from './views/login/login';
import Home from './views/home/home';

import ProtectedRoute from './wrappers/ProtectedRoute';

function App() {
  return (
    <Router>
      <Switch>
        <ProtectedRoute path="/" component={Home} exact />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
    </Router>
  );
}

export default App;
