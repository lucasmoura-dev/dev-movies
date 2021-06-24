import axios from 'axios';
import {TRAKT_API_KEY, TMDB_API_KEY} from '@env';

export const TMDB_IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original/';

/**
 * API responsável por trazer a lista de filmes que estão em alta.
 */
export const apiTrakt = axios.create({
  baseURL: 'https://api.trakt.tv',
  headers: {
    'trakt-api-key': TRAKT_API_KEY,
  },
});

/**
 * API usada apenas para buscar as imagens dos filmes.
 */
export const apiTmdb = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: TMDB_API_KEY,
  },
});
