export enum ActionTypes {
  addMovieToFavorites = 'ADD_MOVIE_TO_FAVORITES',
  removeMovieFromFavorites = 'REMOVE_MOVIE_FROM_FAVORITES',
}

export type IFavoriteMoviesState = {
  movies: number[];
};
