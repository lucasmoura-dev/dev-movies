import React, {useEffect, useState} from 'react';
import Input from '@components/Input';

import {
  NativeSyntheticEvent,
  Text,
  TextInputChangeEventData,
} from 'react-native';

import avatarImage from '@assets/avatar-example.jpg';

import {useDispatch, useSelector} from 'react-redux';

import MoviesList from '@components/MoviesList';
import {IMovie} from 'store/modules/movies/types';
import {fetchMoviesListAction} from 'store/modules/movies/action';
import colors from '@styles/colors';
import {IState} from 'store';
import {
  Avatar,
  Container,
  Header,
  HelloMessage,
  SearchBar,
  SearchDescription,
  SearchFields,
  SearchTitle,
} from './styles';
import {useMovies} from '../../hooks/movies';

type Movie = {
  id: number;
  title: string;
  cover: string;
};

const Home: React.FC = () => {
  const [movieQuery, setMovieQuery] = useState('');
  const [moviesList, fetchMovies] = useMovies();

  useEffect(() => {
    console.log(moviesList);
    fetchMovies('');
  }, []);

  const fetchNextMovies = () => {
    fetchMovies(movieQuery);
  };

  /* const [maxPage, setMaxPage] = useState(60);
  const dispatch = useDispatch();
  const moviesList = useSelector<any, IMoviesList>(state => {
    return state.moviesList.data.movies;
  });

  const fetchMovies = (query: string, page = 1): void => {
    if (moviesList.pagesCount && moviesList.pagesCount >= 60) {
      return;
    }

    dispatch(fetchMoviesListAction(query, page));
  };

  useEffect(() => {
    fetchMovies('');
  }, []); */

  /* const dispatch = useDispatch();

  const moviesList = useSelector<IState, IMovie[]>(state => {
    return state.moviesList.data.movies;
  });

  useEffect(() => {
    dispatch(fetchMoviesListAction(movieQuery));
  }, []); */

  const onSearchMovie = () => {
    // dispatch(fetchMoviesListAction(movieQuery));
    fetchMovies(movieQuery, 1);
  };

  const onChangeSearchInput = (
    event: NativeSyntheticEvent<TextInputChangeEventData>,
  ): void => {
    const query = event.nativeEvent.text;
    setMovieQuery(query);
  };

  return (
    <Container>
      <Header>
        <HelloMessage>Juliana</HelloMessage>
        <Avatar source={avatarImage} />
      </Header>
      <SearchBar>
        <SearchTitle>Descubra</SearchTitle>
        <SearchDescription>O seu próximo filme preferido</SearchDescription>
        <SearchFields>
          <Input
            name="keyword"
            icon="search"
            placeholder="Buscar..."
            onChange={onChangeSearchInput}
            returnKeyType="search"
            selectionColor={colors.purple}
            onSubmitEditing={onSearchMovie}
          />
        </SearchFields>
      </SearchBar>
      <MoviesList fetchNextMovies={fetchNextMovies} />
    </Container>
  );
};

export default Home;
