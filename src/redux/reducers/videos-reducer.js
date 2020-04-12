
const initialState = {
  movies: [],
  categories: [],
  selectedMovie: {},
  isFetching: false,
};

export default function videos(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return {
        ...state,
        isFetching: true,
      };

    case 'FETCH_RESPONSE_SUCCESS':
      return {
        ...state,
        isFetching: false,
      };

    case 'SET_CATEGORY_LIST':
      return {
        ...state,
        categories: action.payload.categories,
      };

    case 'SET_MOVIES_LIST':
      return {
        ...state,
        movies: action.payload.movies,
      };

    case 'SET_SELECTED_MOVIE':
      return {
        ...state,
        selectedMovie: action.payload.movie,
      };

    default:
      return state;
  }
}
