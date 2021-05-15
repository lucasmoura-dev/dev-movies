import React, {useEffect, useState} from 'react';
import Input from '@components/Input';

import avatarImage from '@assets/avatar-example.jpg';

import Movie from '@components/Movie';

import {useDispatch, useSelector} from 'react-redux';

import MoviesList from '@components/MoviesList';
import {
  IMovie,
  IMoviesState,
  TrendingListState,
} from 'store/modules/movies/types';
import {fetchMovieDetail} from 'store/modules/MovieDetails/action';
import {fetchMoviesList} from 'store/modules/movies/action';
import {apiTrakt} from '@services/api';
import {
  Avatar,
  Container,
  Header,
  HelloMessage,
  Movies,
  SearchBar,
  SearchDescription,
  SearchFields,
  SearchTitle,
  MovieWrapper,
} from './styles';

type Movie = {
  id: number;
  title: string;
  cover: string;
};

const Home: React.FC = ({navigation}) => {
  const dispatch = useDispatch();

  // const [moviesList, setMoviesList] = useState([]);
  const moviesList = useSelector<TrendingListState, number[]>(state => {
    return state.moviesList.movies;
  });

  useEffect(async () => {
    dispatch(fetchMoviesList(''));
  }, []);

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
          <Input name="keyword" icon="search" placeholder="Buscar..." />
        </SearchFields>
      </SearchBar>
      <MoviesList moviesList={moviesList} />
    </Container>
  );
};

export default Home;
