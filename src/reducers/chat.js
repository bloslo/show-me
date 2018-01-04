const chat = (state = { chatMsg: [] }, action) => {
  switch (action.type) {
    case 'CHAT_UPDATE':
      return {
        ...state,
        chatMsg: action.message,
      };
    default:
      return state;
  }
};

export default chat;
