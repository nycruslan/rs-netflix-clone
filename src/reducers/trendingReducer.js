const trendingReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_TRENDING':
      return action.payload;
    default:
      return state;
  }
};

export default trendingReducer;
