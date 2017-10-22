import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import Dashboard from './Dashboard';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Welcome from './Welcome';

const Routes = () => (
  <Router path="/" history={browserHistory}>
    <Route path="/" component={Welcome} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/signin" component={SignIn} />
    <Route path="/signup" component={SignUp} />
  </Router>);

export default Routes;
