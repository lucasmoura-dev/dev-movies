import {Reducer} from 'redux';
import {getPosterImageUri} from '@services/imageApi';
import {ActionTypes, IMoviesListState} from './types';

const INITIAL_STATE: IMoviesListState = {
  data: {currentPage: 1, pagesCount: 1, movies: []},
  status: '',
  errorMessage: '',
};

const moviesList: Reducer<IMoviesListState> = (
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
      const {movies, pagesCount, currentPage} = action.payload;

      const parsedMovies = movies.map(movie => {
        const poster = getPosterImageUri(movie.posterPath);
        return {
          title: movie.title,
          idImdb: movie.ids.imdb,
          year: movie.year,
          overview: movie.overview,
          rating: movie.rating,
          genres: movie.genres,
          poster,
        };
      });

      const response = {
        ...state,
        status: 'ok',
        data: {pagesCount, movies: parsedMovies},
      };

      if (currentPage > 1) {
        response.data.movies = [...state.data.movies, ...parsedMovies];
      }

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
