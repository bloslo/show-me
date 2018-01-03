const streamlist = (state = { streams: [], subscribed: [] }, action) => {
  switch (action.type) {
    case 'STREAMLIST_UPDATE':
      return { ...state, streams: action.message };
    case 'STREAMLISTSUBSCRIBED_UPDATE':
      return { ...state, subscribed: action.message };
    default:
      return state;
  }
};

export default streamlist;
