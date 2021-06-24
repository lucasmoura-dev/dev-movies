import {fireEvent, render, waitFor} from '@testing-library/react-native';
import React from 'react';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import MovieDetails from '../../pages/MovieDetails';

const movie = {
  idImdb: 'tt1431045',
  title: 'Deadpool',
  year: 2016,
  overview: 'Some overview',
  rating: 7.95,
  genres: ['Comedy', 'Action'],
  poster: 'https://image.tmdb.org/t/p/w400/swS3PsQYD3wGEWZwtgpUlGRMv1G.jpg',
};

const navigationSetOptions = jest.fn();

describe('MovieDetails Page', () => {
  const initialState = {moviesList: {data: {movies: []}}};
  const mockStore = configureStore();
  let store;

  it('should load MovieDetails screen', () => {
    store = mockStore(initialState);
    const {getByText} = render(
      <MovieDetails
        navigation={{setOptions: navigationSetOptions}}
        route={{params: {movie}}}
      />,
    );

    expect(getByText('Saiba mais')).toBeTruthy();
  });

  it('should show movie title', () => {
    store = mockStore(initialState);
    const {getByText} = render(
      <MovieDetails
        navigation={{setOptions: navigationSetOptions}}
        route={{params: {movie}}}
      />,
    );

    expect(getByText(movie.title)).toBeTruthy();
  });

  it('should show movie overview', () => {
    store = mockStore(initialState);
    const {getByText} = render(
      <MovieDetails
        navigation={{setOptions: navigationSetOptions}}
        route={{params: {movie}}}
      />,
    );

    expect(getByText(movie.overview)).toBeTruthy();
  });

  it('should show movie year', () => {
    store = mockStore(initialState);
    const {getByText} = render(
      <MovieDetails
        navigation={{setOptions: navigationSetOptions}}
        route={{params: {movie}}}
      />,
    );

    expect(getByText(movie.year.toString())).toBeTruthy();
  });
});
