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
