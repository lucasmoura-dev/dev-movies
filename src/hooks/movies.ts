import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {IMovie, IMoviesList} from 'store/modules/movies/types';
import {IState} from '~/store';
import {fetchMoviesListAction} from '../store/modules/movies/action';

export const useMovies = (): [
  IMovie[],
  (query: string, canClearMoviesList?: boolean) => void,
] => {
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();
  const moviesList = useSelector<any, IMoviesList>(state => {
    return state.moviesList.data;
  });

  const fetchMovies = (query: string, canClearMoviesList = false): void => {
    if (
      moviesList.pagesCount &&
      currentPage > moviesList.pagesCount &&
      !canClearMoviesList
    ) {
      return;
    }

    if (canClearMoviesList) {
      dispatch(fetchMoviesListAction(query, 1));
      setCurrentPage(1);
    } else {
      dispatch(fetchMoviesListAction(query, currentPage));
    }

    setCurrentPage(currentPage + 1);
  };

  useEffect(() => {
    fetchMovies('', true);
  }, []);

  return [moviesList.movies, fetchMovies];
};
