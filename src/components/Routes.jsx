import React from 'react';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, compose } from 'redux';
import { Route, HashRouter } from 'react-router-dom';

/* Components used */
import Welcome from './Welcome';
import Dashboard from './Dashboard';
import SignIn from './SignIn';
import SignUp from './SignUp';

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
    <HashRouter path="/">
      <div>
        <Route path="/welcome" component={Welcome} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
      </div>
    </HashRouter>
  </Provider>);

export default Routes;
