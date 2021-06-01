const trailerReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_TRAILER':
      return [...state, action.payload];
    default:
      return state;
  }
};

export default trailerReducer;
