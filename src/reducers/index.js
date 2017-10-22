import { combineReducers } from 'redux';
import user from './user';
import socket from './socket';

const rootReducer = combineReducers({
  user,
  socket,
});

export default rootReducer;
