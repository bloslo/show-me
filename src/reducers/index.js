import { combineReducers } from 'redux';
import user from './user';
import socket from './socket';
import stream from './stream';

const rootReducer = combineReducers({
  user,
  socket,
  stream,
});

export default rootReducer;
