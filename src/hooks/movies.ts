import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {IMovie, IMoviesList} from 'store/modules/movies/types';
import {IState} from '~/store';
import {fetchMoviesListAction} from '../store/modules/movies/action';
// import {fetchMoviesListAction} from '~/store/modules/movies/action';

export const useMovies = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [maxPage, setMaxPage] = useState(60);
  const dispatch = useDispatch();
  const moviesList = useSelector<any, IMoviesList>(state => {
    // console.log(state.moviesList.data.movies, 'hook');
    return state.moviesList.data;
  });

  const fetchMovies = (query: string, page: number): void => {
    const canClearMoviesList = page === 1;
    console.log('fetch page ', currentPage);
    if (
      moviesList.pagesCount &&
      currentPage > moviesList.pagesCount &&
      !canClearMoviesList
    ) {
      console.log(
        `saindo pageCount(${moviesList.pagesCount}) currentPage(${currentPage})`,
      );
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
    fetchMovies('');
  }, []);

  return [moviesList.movies, fetchMovies];
};
