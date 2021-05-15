import axios from 'axios';

const TRAKT_API_KEY =
  'd8e8e766c7067db59e5d627381550950b482fccd174ffb30a4f5c39875268ac0';

const TMDB_API_KEY = 'f3deba27712e5a7969d5d993909a6123';
const DEFAULT_LANGUAGE = 'pt-BR';

export const TMDB_IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original/';

/**
 * API responsável por trazer a lista de filmes que estão em alta, mas ela não
 * trás detalhes dos filmes.
 */
export const apiTrakt = axios.create({
  baseURL: 'https://api.trakt.tv',
  headers: {
    'trakt-api-key': TRAKT_API_KEY,
  },
});

/**
 * API para buscar informações detalhadas de um filme em específico.
 */
export const apiTmdb = axios.create({
  // https://api.themoviedb.org/3/movie/293660?api_key=f3deba27712e5a7969d5d993909a6123
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: TMDB_API_KEY,
    // language: DEFAULT_LANGUAGE,
  },
});
