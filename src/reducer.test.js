/* eslint-env node, jest */
import reducers from './reducers';

test('Register', () => {
  let state;
  state = reducers({ user: { loggedIn: false, registerError: '', loginError: '' }, socket: { connected: true } }, { type: 'MAKE_CONNECTION' });
  expect(state).toEqual({ user: { loggedIn: false, registerError: '', loginError: '' }, socket: { connected: true } });
  state = reducers({ user: { loggedIn: false, registerError: '', loginError: '' }, socket: { connected: true } }, { type: 'CONNECT' });
  expect(state).toEqual({ user: { loggedIn: false, registerError: '', loginError: '' }, socket: { connected: true } });
  state = reducers({ user: { loggedIn: false, registerError: '', loginError: '' }, socket: { connected: true } }, { type: 'SEND_MESSAGE', method: 'register', payload: { name: 'q', email: 'q', pass: 'q' } });
  expect(state).toEqual({ user: { loggedIn: false, registerError: '', loginError: '' }, socket: { connected: true } });
  state = reducers({ user: { loggedIn: false, registerError: '', loginError: '' }, socket: { connected: true } }, { type: 'REGISTER_FAILED', message: 'E-mail address is invalid' });
  expect(state).toEqual({ user: { loggedIn: false, registerError: 'E-mail address is invalid', loginError: '' }, socket: { connected: true } });
  state = reducers({ user: { loggedIn: false, registerError: 'E-mail address is invalid', loginError: '' }, socket: { connected: true } }, { type: 'SEND_MESSAGE', method: 'register', payload: { name: 'q', email: 'q@me.com', pass: 'q' } });
  expect(state).toEqual({ user: { loggedIn: false, registerError: 'E-mail address is invalid', loginError: '' }, socket: { connected: true } });
  state = reducers({ user: { loggedIn: false, registerError: 'E-mail address is invalid', loginError: '' }, socket: { connected: true } }, { type: 'REGISTER' });
  expect(state).toEqual({ user: { loggedIn: false, registerError: 'Succesfully registered', loginError: '' }, socket: { connected: true } });
});

test('Login', () => {
  let state;
  state = reducers({ user: { loggedIn: false, registerError: '', loginError: '' }, socket: { connected: true } }, { type: 'MAKE_CONNECTION' });
  expect(state).toEqual({ user: { loggedIn: false, registerError: '', loginError: '' }, socket: { connected: true } });
  state = reducers({ user: { loggedIn: false, registerError: '', loginError: '' }, socket: { connected: true } }, { type: 'CONNECT' });
  expect(state).toEqual({ user: { loggedIn: false, registerError: '', loginError: '' }, socket: { connected: true } });
  state = reducers({ user: { loggedIn: false, registerError: '', loginError: '' }, socket: { connected: true } }, { type: 'SEND_MESSAGE', method: 'login', payload: { name: 'a', pass: 'a' } });
  expect(state).toEqual({ user: { loggedIn: false, registerError: '', loginError: '' }, socket: { connected: true } });
  state = reducers({ user: { loggedIn: false, registerError: '', loginError: '' }, socket: { connected: true } }, { type: 'LOG_IN_FAILED', message: 'Wrong username or password' });
  expect(state).toEqual({ user: { loggedIn: false, registerError: '', loginError: 'Wrong username or password' }, socket: { connected: true } });
  state = reducers({ user: { loggedIn: false, registerError: '', loginError: 'Wrong username or password' }, socket: { connected: true } }, { type: 'SEND_MESSAGE', method: 'login', payload: { name: 'q', pass: 'q' } });
  expect(state).toEqual({ user: { loggedIn: false, registerError: '', loginError: 'Wrong username or password' }, socket: { connected: true } });
  state = reducers({ user: { loggedIn: false, registerError: '', loginError: 'Wrong username or password' }, socket: { connected: true } }, { type: 'LOG_IN' });
  expect(state).toEqual({ user: { loggedIn: true, registerError: '', loginError: '' }, socket: { connected: true } });
});
