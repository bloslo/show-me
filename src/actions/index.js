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

export const registerFailed = message => ({
  type: 'REGISTER_FAILED',
  message,
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

export const sendMessage = (method, payload) => ({
  type: 'SEND_MESSAGE',
  method,
  payload,
});

export const phoneMetaUpdate = message => ({
  type: 'PHONEMETA_UPDATE',
  message,
});

export const streamListUpdate = message => ({
  type: 'STREAMLIST_UPDATE',
  message,
});

export const streamListUpdateFailed = message => ({
  type: 'STREAMLIST_UPDATEFAILED',
  message,
});

/*
Example of action with parameter
export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id
})
*/
