import {getPosterImageUri} from '@services/imageApi';
import {Reducer} from 'redux';
import {ActionTypes, MoviesDetailsState} from './types';

const INITIAL_STATE: MoviesDetailsState = {
  movies: [],
  status: '',
  errorMessage: '',
};

const moviesCatalog: Reducer<MoviesDetailsState> = (
  state = INITIAL_STATE,
  action: any,
) => {
  switch (action.type) {
    case ActionTypes.fetchMovieDetailsPending: {
      return state;
    }
    case ActionTypes.fetchMovieDetailsFulfilled: {
      const {
        id,
        title,
        overview,
        vote_average: voteAverage,
        genres: genresObjects,
        release_date: releaseDate,
        poster_path: posterPath,
      } = action.payload.data;

      const poster = getPosterImageUri(posterPath);
      const year = releaseDate.split('-')[0];
      const genres = genresObjects.map(genreObject => genreObject.name);

      const response = {
        ...state,
        status: 'success',
        movies: [
          ...state.movies,
          {
            id,
            title,
            overview,
            genres,
            voteAverage,
            year,
            poster,
          },
        ],
      };
      console.log(response);
      return response;
    }
    case ActionTypes.fetchMovieDetailsRejected: {
      return {
        ...state,
        status: 'failed',
        errorMessage: action.payload,
      };
    }
    default:
      return state;
  }
};

export default moviesCatalog;
