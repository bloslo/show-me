import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, compose } from 'redux';

/* Components used */
import Welcome from './Welcome.jsx';
import Dashboard from './Dashboard.jsx';
import SignIn from './SignIn.jsx';
import SignUp from './SignUp.jsx';

import rootReducer from '../reducers';
import mySaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();
/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware))); // eslint-disable-line
/* eslint-enable */
sagaMiddleware.run(mySaga);

const Routes = () => (
  <Provider store={store}>
    <Router path="/" history={browserHistory}>
      <Route path="/" component={Welcome} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
    </Router>
  </Provider>);

export default Routes;
