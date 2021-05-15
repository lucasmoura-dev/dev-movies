import {apiTrakt, apiTmdb} from '@services/api';
import {ActionTypes} from './types';

export function fetchMoviesList(search: string) {
  return {
    type: ActionTypes.fetchMovies,
    payload: apiTrakt.get('movies/trending', {
      params: {
        page: 1,
        extended: 'full',
      },
    }),
  };
}

// Para cada ID da MovieList (TRAKT)
// Pegar as covers do filme por id
// Atualizar as imagens URI com base_URL + caminho retornado acima
