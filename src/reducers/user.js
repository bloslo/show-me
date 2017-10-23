const user = (state = { loggedIn: false, registerError: '', loginError: '' }, action) => {
  switch (action.type) {
    case 'LOG_IN':
      return {
        ...state,
        loginError: '',
        loggedIn: true,
      };
    case 'LOG_IN_FAILED':
      return {
        ...state,
        loggedIn: false,
        loginError: action.message,
      };
    case 'REGISTER':
      return {
        ...state,
        registerError: 'Succesfully registered',
      };
    case 'REGISTER_FAILED':
      return {
        ...state,
        registerError: action.message,
      };
    case 'LOG_OUT':
      return {
        ...state,
        loggedIn: false,
      };
    default:
      return state;
  }
};

export default user;
