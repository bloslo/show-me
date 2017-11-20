const socket = (state = { connected: false }, action) => {
  switch (action.type) {
    case 'CONNECT':
      return {
        ...state,
        connected: true,
      };
    case 'DISCONNECT':
      return {
        ...state,
        connected: false,
      };
    default:
      return state;
  }
};

export default socket;
