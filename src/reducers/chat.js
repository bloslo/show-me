const chat = (state = { chatMsg: [] }, action) => {
  switch (action.type) {
    case 'CHAT_UPDATE':
      return {
        ...state,
        chatMsg: [action.data, ...state.chatMsg],
      };
    default:
      return state;
  }
};

export default chat;
