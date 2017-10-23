const socket = (state = { connected: false }, action) => {
  switch (action.type) {
    case 'CONNECT':
      return Object.assign(state,
        {
          connected: true,
        });
    case 'DISCONNECT':
      return Object.assign(state,
        {
          connected: false,
        });
    default:
      return state;
  }
};

export default socket;
