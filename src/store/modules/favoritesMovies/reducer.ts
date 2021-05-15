import {Reducer} from 'redux';
import {ActionTypes, IFavoriteMovie, IFavoriteMoviesState} from './types';

const INITIAL_STATE: IFavoriteMoviesState = {
  movies: [],
};

const favoritesMovies: Reducer<IFavoriteMoviesState> = (
  state = INITIAL_STATE,
  action,
) => {
  switch (action.type) {
    case ActionTypes.addMovieToFavorites: {
      const idImdbMovie = action.payload.idImdb;
      const movieInFavoritesIndex = state.movies.findIndex(
        id => id === idImdbMovie,
      );
      if (movieInFavoritesIndex === -1) {
        return {movies: [...state.movies, idImdbMovie]};
      }
      return state;
    }
    case ActionTypes.removeMovieFromFavorites: {
      const idImdbMovie = action.payload.idImdb;
      const movieInFavoritesIndex = state.movies.findIndex(
        id => id === idImdbMovie,
      );
      if (movieInFavoritesIndex >= 0) {
        const newMovies = [...state.movies];
        newMovies.splice(movieInFavoritesIndex, 1);
        return {movies: newMovies};
      }
      break;
    }
    default:
      return state;
  }
};

export default favoritesMovies;
