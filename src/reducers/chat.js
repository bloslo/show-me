const chat = (state = { chatMsg: [] }, action) => {
  switch (action.type) {
    case 'CHAT_UPDATE':
      return {
        ...state,
        chatMsg: [...state.chatMsg, action.data],
      };
    default:
      return state;
  }
};

export default chat;
