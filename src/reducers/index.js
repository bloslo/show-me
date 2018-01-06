import { combineReducers } from 'redux';
import user from './user';
import socket from './socket';
import stream from './stream';
import streamlist from './streamlist';
import chat from './chat';

const rootReducer = combineReducers({
  user,
  socket,
  stream,
  streamlist,
  chat,
});

export default rootReducer;
