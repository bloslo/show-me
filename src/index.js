import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import { firebaseApp } from './firebase';

//Importing Componenting Component
import Dashboard from './Components/Dashboard';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';

firebaseApp.auth().onAuthStateChanged(user => {
  if(user) {
    browserHistory.push('/dashboard');
  } else {
    browserHistory.replace('/signin');
  }
})

ReactDOM.render(
  <Router path="/" history={browserHistory}>
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/signin" component={SignIn} />
    <Route path="/signup" component={SignUp} />
  </Router>, document.getElementById('root')
)
