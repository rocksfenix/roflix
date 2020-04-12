import api from '../../../utils/api';

// Constants
export const FETCH_REQUEST = 'FETCH_REQUEST';
export const FETCH_RESPONSE_SUCCESS = 'FETCH_RESPONSE_SUCCESS';
export const SET_CATEGORY_LIST = 'SET_CATEGORY_LIST';
export const SET_MOVIES_LIST = 'SET_MOVIES_LIST';
export const SET_SELECTED_MOVIE = 'SET_SELECTED_MOVIE';


// Action creators
export const setCategories = (categories) => ({
  type: 'SET_CATEGORY_LIST',
  payload: {
    categories,
  },
});

export const setMovies = (movies) => ({
  type: 'SET_MOVIES_LIST',
  payload: {
    movies,
  },
});

export const selectMovie = () => ({
  type: 'SET_SELECTED_MOVIE',
  payload: {
    movie: {},
  },
});

// Async Actions via redux-thunk
export const fetchCategories = () => async (dispatch) => {
  const categories = await api.getMovies();
  dispatch(
    setCategories(categories),
  );
};

export const fetchMovies = () => async (dispatch) => {
  const movies = await api.getSuggestion(10);
  dispatch(
    setMovies(movies),
  );
};
