import {apiTmdb, apiTrakt} from '@services/api';
import {ActionTypes} from './types';

/*
  A API da Trakt não fornece a imagem das capas de filmes,
  por isso foi necessário fazer o uso de outra API (TMDB).
*/
export function fetchMoviesListAction(query: string, page = 1): any {
  return {
    type: ActionTypes.fetchMovies,
    async payload() {
      const {headers, data} = await apiTrakt.get('movies/trending', {
        params: {
          page,
          extended: 'full',
          query: query || '',
          limit: 10,
        },
      });

      const movies = await Promise.all(
        await data.map(async ({movie}) => {
          const idImdb = movie.ids.imdb;
          const {
            data: {poster_path: posterPath},
          } = await apiTmdb.get(`movie/${idImdb}`);
          return {...movie, posterPath};
        }),
      );

      const pagesCount = headers['x-pagination-page-count'];

      return {currentPage: page, pagesCount, movies};
    },
  };
}
