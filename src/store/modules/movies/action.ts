import {apiTmdb, apiTrakt} from '@services/api';
import {ActionTypes} from './types';

export function fetchMoviesList(query: string) {
  return {
    type: ActionTypes.fetchMovies,
    async payload() {
      const {data} = await apiTrakt.get('movies/trending', {
        params: {
          page: 1,
          extended: 'full',
          query: query || '',
          limit: 25,
        },
      });

      return Promise.all(
        await data.map(async ({movie}) => {
          const idImdb = movie.ids.imdb;
          const {
            data: {poster_path: posterPath},
          } = await apiTmdb.get(`movie/${idImdb}`);
          return {...movie, posterPath};
        }),
      );
    },
  };
}
