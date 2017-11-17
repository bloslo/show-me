import io from 'socket.io-client';
import { eventChannel } from 'redux-saga';
import { fork, put, call, takeEvery, cancel, take } from 'redux-saga/effects';
import { makeConnection, connectionFailed, logIn, logInFailed, register, registerFailed, disconnect, connect, phoneMetaUpdate } from '../actions';

function* startApp() {
  yield put(makeConnection());
}

function subscribe(socket) {
  return eventChannel((emit) => {
    socket.on('login', (data) => {
      if (data.succeed) {
        emit(logIn());
      } else {
        emit(logInFailed(data.message));
      }
    });
    socket.on('register', (data) => {
      if (data.succeed) {
        emit(register());
      } else {
        emit(registerFailed(data.message));
      }
    });
    socket.on('phonemeta', (data) => {
      emit(phoneMetaUpdate(data));
    });
    return () => {};
  });
}

function* read(socket) {
  const channel = yield call(subscribe, socket);
  while (true) {
    const action = yield take(channel);
    yield put(action);
  }
}

function* write(socket) {
  while (true) {
    const { method, payload } = yield take('SEND_MESSAGE');
    socket.emit(method, payload);
  }
}


function* handleIO(socket) {
  yield fork(read, socket);
  yield fork(write, socket);
}

function* connectionFlow() {
  // yield put({ type: 'START_CONNECTING' });
  const socket = io('http://40.68.124.79:9090');
  const succeed = yield call(() => new Promise((resolve) => {
    socket.on('connect', () => {
      resolve(true);
    });

    socket.on('connect_error', () => {
      resolve(false);
    });
  }));
  if (!succeed) {
    yield put(connectionFailed());
  } else {
    yield put(connect());
    const task = yield fork(handleIO, socket);
    // when disconnected stop listening
    yield call(() => new Promise((resolve) => {
      socket.on('disconnect', () => {
        resolve();
      });
    }));
    yield cancel(task);
    yield put(disconnect());
  }
}

function* mySaga() {
  yield takeEvery('MAKE_CONNECTION', connectionFlow);
  yield takeEvery('DISCONNECTED', connectionFlow);
  yield takeEvery('CONNECTION_FAILED', connectionFlow);
  yield call(startApp);
}

export default mySaga;
