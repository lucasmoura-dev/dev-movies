import React, {useEffect, useState} from 'react';
import Input from '@components/Input';

import {NativeSyntheticEvent, TextInputChangeEventData} from 'react-native';

import avatarImage from '@assets/avatar-example.jpg';

import {useDispatch, useSelector} from 'react-redux';

import MoviesList from '@components/MoviesList';
import {IMovie} from 'store/modules/movies/types';
import {fetchMoviesList} from 'store/modules/movies/action';
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

type Movie = {
  id: number;
  title: string;
  cover: string;
};

const Home: React.FC = () => {
  const [movieQuery, setMovieQuery] = useState('');
  const dispatch = useDispatch();

  const moviesList = useSelector<IState, IMovie[]>(state => {
    return state.moviesList.movies;
  });

  useEffect(() => {
    dispatch(fetchMoviesList(movieQuery));
  }, []);

  const onSearchMovie = () => {
    dispatch(fetchMoviesList(movieQuery));
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
      <MoviesList moviesList={moviesList} />
    </Container>
  );
};

export default Home;
