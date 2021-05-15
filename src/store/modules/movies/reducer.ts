import {Reducer} from 'redux';
import {ActionTypes, MoviesListState} from './types';

const INITIAL_STATE: MoviesListState = {
  movies: [],
  status: '',
  errorMessage: '',
};

const moviesList: Reducer<MoviesListState> = (
  state = INITIAL_STATE,
  action,
) => {
  switch (action.type) {
    case ActionTypes.fetchMoviesPending: {
      return {
        ...state,
        status: 'pending',
      };
    }
    case ActionTypes.fetchMoviesFulfilled: {
      const {data} = action.payload;

      const movies = data.map(({movie}) => {
        return {
          title: movie.title,
          idImdb: movie.ids.imdb,
          year: movie.year,
          overview: movie.overview,
          rating: movie.rating,
          genres: movie.genres,
        };
      });

      const response = {
        ...state,
        status: 'ok',
        movies,
      };
      return response;
    }
    case ActionTypes.fetchMoviesRejected: {
      const response = {
        ...state,
        status: 'error',
        errorMessage: `${action.payload.message}`,
      };
      return response;
    }
    default:
      return state;
  }
};

export default moviesList;
