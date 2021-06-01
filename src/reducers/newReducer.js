const newReducer = (state = [], actions) => {
  switch (actions.type) {
    case 'FETCH_NEW':
      return actions.payload;
    default:
      return state;
  }
};

export default newReducer;
