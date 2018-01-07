const socket = (state = { location: { long: 40.758895, lat: -74.0026458 } }, action) => {
  switch (action.type) {
    case 'INITSTREAM':
      return { location: { long: 40.758895, lat: -74.0026458 } };
    case 'PHONEMETA_UPDATE':
      return Object.assign({}, state,
        action.message);
    default:
      return state;
  }
};

export default socket;
