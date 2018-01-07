const chat = (state = { chatMsg: [] }, action) => {
  switch (action.type) {
    case 'INITSTREAM':
      return { chatMsg: [] };
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
