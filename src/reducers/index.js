import { combineReducers } from 'redux';
import newReducer from './newReducer';
import trailerReducer from './trailerReducer';
import topReducer from './topReducer';
import trendingReducer from './trendingReducer';

const mutedReducer = (state = true, action) => {
  switch (action.type) {
    case 'SET_MUTED':
      return (state = true);
    case 'UNSET_MUTED':
      return (state = false);
    default:
      return state;
  }
};

const selectedMovieReducer = (selectedMovie = null, action) => {
  if (action.type === 'MOVIE_SELECTED') return action.payload;

  return selectedMovie;
};

const modalReducer = (state = false, action) => {
  switch (action.type) {
    case 'MODAL_SHOW':
      return (state = true);
    case 'MODAL_HIDE':
      return (state = false);
    default:
      return state;
  }
};

const actionsReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_ACTIONS':
      return action.payload;
    default:
      return state;
  }
};

const comediesReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_COMEDIES':
      return action.payload;
    default:
      return state;
  }
};

const horrorsReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_HORRORS':
      return action.payload;
    default:
      return state;
  }
};

const romancesReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_ROMANCES':
      return action.payload;
    default:
      return state;
  }
};

const documentariesReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_DOCUMENTARIES':
      return action.payload;
    default:
      return state;
  }
};

const thrillersReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_THRILLERS':
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  newReleases: newReducer,
  top: topReducer,
  trending: trendingReducer,
  actions: actionsReducer,
  comedies: comediesReducer,
  horrors: horrorsReducer,
  romances: romancesReducer,
  documentaries: documentariesReducer,
  thrillers: thrillersReducer,
  trailers: trailerReducer,
  muted: mutedReducer,
  selectedMovie: selectedMovieReducer,
  modal: modalReducer,
});
