export enum ActionTypes {
  fetchMovies = 'FETCH_MOVIES',
  fetchMoviesPending = 'FETCH_MOVIES_PENDING',
  fetchMoviesFulfilled = 'FETCH_MOVIES_FULFILLED',
  fetchMoviesRejected = 'FETCH_MOVIES_REJECTED',
}

export type IMovie = {
  idImdb: string;
  title: string;
  year: number;
  overview: string;
  rating: number;
  genres: string[];
  poster: string;
};

export type IMoviesListState = {
  movies: IMovie[];
  status: string;
  errorMessage: string;
};
