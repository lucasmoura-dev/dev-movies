import React, {useEffect, useState} from 'react';
import Input from '@components/Input';

import {
  NativeSyntheticEvent,
  Text,
  TextInputChangeEventData,
} from 'react-native';

import avatarImage from '@assets/avatar-example.jpg';

import MoviesList from '@components/MoviesList';
import colors from '@styles/colors';
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

const Home: React.FC = () => {
  const [movieQuery, setMovieQuery] = useState('');
  const [, fetchMovies] = useMovies();

  const fetchNextMovies = () => {
    fetchMovies(movieQuery);
  };

  const onSearchMovie = () => {
    fetchMovies(movieQuery, true);
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
