import {ActionTypes} from './types';

export function addMovieToFavorites(idImdb: number) {
  return {
    type: ActionTypes.addMovieToFavorites,
    payload: {
      idImdb,
    },
  };
}

export function remoteMovieFromFavorites(idImdb: number) {
  return {
    type: ActionTypes.removeMovieFromFavorites,
    payload: {
      idImdb,
    },
  };
}
