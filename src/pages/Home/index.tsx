import React, {useEffect, useState} from 'react';
import Input from '@components/Input';

import {
  NativeSyntheticEvent,
  Text,
  TextInputChangeEventData,
  Keyboard,
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

  const clearHandle = () => {
    Keyboard.dismiss();
    setMovieQuery('');
    fetchMovies('', true);
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
            value={movieQuery}
            onClear={clearHandle}
            onSubmit={onSearchMovie}
            onChangeText={text => setMovieQuery(text)}
          />
        </SearchFields>
      </SearchBar>
      <MoviesList fetchNextMovies={fetchNextMovies} />
    </Container>
  );
};

export default Home;
