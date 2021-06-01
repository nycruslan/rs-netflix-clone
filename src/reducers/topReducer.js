const topReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_TOP':
      return action.payload;
    default:
      return state;
  }
};

export default topReducer;
