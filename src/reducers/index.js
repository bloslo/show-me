import { combineReducers } from 'redux';
import user from './user';
import socket from './socket';
import stream from './stream';
import streamlist from './streamlist';

const rootReducer = combineReducers({
  user,
  socket,
  stream,
  streamlist,
});

export default rootReducer;
