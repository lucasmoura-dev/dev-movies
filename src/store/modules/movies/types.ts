export enum ActionTypes {
  fetchMovies = 'FETCH_MOVIES',
  fetchMoviesPending = 'FETCH_MOVIES_PENDING',
  fetchMoviesFulfilled = 'FETCH_MOVIES_FULFILLED',
  fetchMoviesRejected = 'FETCH_MOVIES_REJECTED',
}

/* export type IMovieIds = {
  trakt: number;
  slug: string;
  imdb: string;
  tmdb: number;
};

export type IMovie = {
  title: string;
  year: number;
  ids: IMovieIds;
}; */

export type IMovie = {
  idImdb: string;
  title: string;
  year: number;
  overview: string;
  rating: number;
  genres: string[];
};

export type MoviesListState = {
  movies: IMovie[];
  status: string;
  errorMessage: string;
};

/* export type TrendingListState = {
  moviesIds: number[];
  status: string;
  errorMessage: string;
}; */
