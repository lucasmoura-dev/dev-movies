export enum ActionTypes {
  fetchMovieDetailsPending = 'FETCH_MOVIE_DETAILS_PENDING',
  fetchMovieDetailsFulfilled = 'FETCH_MOVIE_DETAILS_FULFILLED',
  fetchMovieDetailsRejected = 'FETCH_MOVIE_DETAILS_REJECTED',
}

/* export type IMovie = {
  id: number;
  title: string;
  overview: string;
  voteAverage: number;
  genres: string[];
  year: string | number;
  poster: string;
}; */

export type MoviesDetailsState = {
  movies: IMovie[];
  status: string;
  errorMessage: string;
};
