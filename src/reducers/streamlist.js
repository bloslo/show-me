const streamlist = (state = { streams: [] }, action) => {
  switch (action.type) {
    case 'STREAMLIST_UPDATE':
      return { ...state, streams: action.message };
    default:
      return state;
  }
};

export default streamlist;
