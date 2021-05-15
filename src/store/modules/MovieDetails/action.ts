import {apiTmdb} from '@services/api';

export function fetchMovieDetail(tmdbMovieId: number) {
  return {
    type: 'FETCH_MOVIE_DETAILS',
    payload: apiTmdb.get(`movie/${tmdbMovieId}`),
  };
}
