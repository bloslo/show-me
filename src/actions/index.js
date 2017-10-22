export const logIn = () => ({
  type: 'LOG_IN',
});

export const logInFailed = message => ({
  type: 'LOG_IN_FAILED',
  message,
});

export const register = () => ({
  type: 'REGISTER',
});

export const registerFailed = () => ({
  type: 'REGISTER_FAILED',
});

export const connect = () => ({
  type: 'CONNECT',
});

export const disconnect = () => ({
  type: 'DISCONNECT',
});

export const makeConnection = () => ({
  type: 'MAKE_CONNECTION',
});

export const connectionFailed = () => ({
  type: 'CONNECTION_FAILED',
});

export const sendMessage = payload => ({
  type: 'SEND_MESSAGE',
  payload,
});


/*
Example of action with parameter
export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id
})
*/
