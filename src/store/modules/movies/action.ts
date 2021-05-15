import {apiTrakt} from '@services/api';
import {ActionTypes} from './types';

export function fetchMoviesList(query: string) {
  return {
    type: ActionTypes.fetchMovies,
    payload: apiTrakt.get('movies/trending', {
      params: {
        page: 1,
        extended: 'full',
        query: query || '',
        limit: 25,
      },
    }),
  };
}
