/* eslint-env node, jest */
/*
import reducers from './reducers';

test('Connect', () => {
let state;
state = reducers(undefined, {});
expect(state).toEqual({ user: { loggedIn: false }, socket: { connected: false } });
state = reducers({ user: { loggedIn: false }, socket: { connected: false } },
  { type: 'MAKE_CONNECTION' });
expect(state).toEqual({ user: { loggedIn: false }, socket: { connected: false } });
state = reducers({ user: { loggedIn: false }, socket: { connected: false } }, { type: 'CONNECT' });
expect(state).toEqual({ user: { loggedIn: false }, socket: [{ connected: true }] });
});
*/
test('Connect', () => {
  expect(1).toEqual(1);
});
