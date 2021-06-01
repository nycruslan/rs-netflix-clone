import tmdb from '../apis/tmdb';

export const fetchNew = () => async dispatch => {
  const { data } = await tmdb.get('/movie/now_playing');

  dispatch({
    type: 'FETCH_NEW',
    payload: data.results,
  });
};

export const fetchTop = () => async dispatch => {
  const { data } = await tmdb.get('/movie/top_rated');

  dispatch({
    type: 'FETCH_TOP',
    payload: data.results,
  });
};

export const fetchTrending = () => async dispatch => {
  const { data } = await tmdb.get('/trending/movie}/day');

  dispatch({
    type: 'FETCH_TRENDING',
    payload: data.results,
  });
};

export const fetchComedies = () => async dispatch => {
  const { data } = await tmdb.get(`/discover/movie`, {
    params: { with_genres: 35 },
  });

  dispatch({
    type: 'FETCH_COMEDIES',
    payload: data.results,
  });
};

export const fetchActions = () => async dispatch => {
  const { data } = await tmdb.get(`/discover/movie`, {
    params: { with_genres: 28 },
  });

  dispatch({
    type: 'FETCH_ACTIONS',
    payload: data.results,
  });
};

export const fetchThrillers = () => async dispatch => {
  const { data } = await tmdb.get(`/discover/movie`, {
    params: { with_genres: 53 },
  });

  dispatch({
    type: 'FETCH_THRILLERS',
    payload: data.results,
  });
};

export const fetchHorrors = () => async dispatch => {
  const { data } = await tmdb.get(`/discover/movie`, {
    params: { with_genres: 27 },
  });

  dispatch({
    type: 'FETCH_HORRORS',
    payload: data.results,
  });
};

export const fetchRomances = () => async dispatch => {
  const { data } = await tmdb.get(`/discover/movie`, {
    params: { with_genres: 10749 },
  });

  dispatch({
    type: 'FETCH_ROMANCES',
    payload: data.results,
  });
};

export const fetchDocumentaries = () => async dispatch => {
  const { data } = await tmdb.get(`/discover/movie`, {
    params: { with_genres: 99 },
  });

  dispatch({
    type: 'FETCH_DOCUMENTARIES',
    payload: data.results,
  });
};

export const fetchTrailer = movieId => async dispatch => {
  const { data } = await tmdb.get(`/movie/${movieId}/videos`);

  dispatch({
    type: 'FETCH_TRAILER',
    payload: data,
  });
};

export const setMuted = () => {
  return {
    type: 'SET_MUTED',
  };
};

export const unsetMuted = () => {
  return {
    type: 'UNSET_MUTED',
  };
};

export const selectMovie = movie => {
  return {
    type: 'MOVIE_SELECTED',
    payload: movie,
  };
};

export const showModal = () => {
  return {
    type: 'MODAL_SHOW',
  };
};

export const hideModal = () => {
  return {
    type: 'MODAL_HIDE',
  };
};
