import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, compose } from 'redux';

/* Components used */
import welcome from './welcome';
import dashboard from './dashboard';
import signIn from './signIn';
import signUp from './signUp';

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
      <Route path="/" component={welcome} />
      <Route path="/dashboard" component={dashboard} />
      <Route path="/signin" component={signIn} />
      <Route path="/signup" component={signUp} />
    </Router>
  </Provider>);

export default Routes;
