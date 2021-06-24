import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import configureStore from 'redux-mock-store';

import {Provider} from 'react-redux';
import MoviesList from '../../components/MoviesList';

const movies = [
  {
    idImdb: 'tt1431045',
    title: 'Deadpool',
    year: 2016,
    overview: 'Some overview',
    rating: '7.95',
    genres: ['Comedy', 'Action'],
    poster: 'https://image.tmdb.org/t/p/w400/swS3PsQYD3wGEWZwtgpUlGRMv1G.jpg',
  },
  {
    idImdb: '3',
    title: 'Movie #3',
    year: 2016,
    overview: 'Some overview',
    rating: '8.99',
    genres: ['Thriller', 'Action'],
    poster: 'https://image.tmdb.org/t/p/w400/swS3PsQYD3wGEWZwtgpUlGRMv1G.jpg',
  },
  {
    idImdb: '4',
    title: 'Movie #4',
    year: 2016,
    overview: 'Some overview',
    rating: '8.99',
    genres: ['Thriller', 'Action'],
    poster: 'https://image.tmdb.org/t/p/w400/swS3PsQYD3wGEWZwtgpUlGRMv1G.jpg',
  },
  {
    idImdb: '5',
    title: 'Movie #5',
    year: 2016,
    overview: 'Some overview',
    rating: '8.99',
    genres: ['Thriller', 'Action'],
    poster: 'https://image.tmdb.org/t/p/w400/swS3PsQYD3wGEWZwtgpUlGRMv1G.jpg',
  },
  {
    idImdb: '6',
    title: 'Movie #6',
    year: 2016,
    overview: 'Some overview',
    rating: '8.99',
    genres: ['Thriller', 'Action'],
    poster: 'https://image.tmdb.org/t/p/w400/swS3PsQYD3wGEWZwtgpUlGRMv1G.jpg',
  },
  {
    idImdb: '7',
    title: 'Movie #7',
    year: 2016,
    overview: 'Some overview',
    rating: '8.99',
    genres: ['Thriller', 'Action'],
    poster: 'https://image.tmdb.org/t/p/w400/swS3PsQYD3wGEWZwtgpUlGRMv1G.jpg',
  },
  {
    idImdb: '8',
    title: 'Movie #8',
    year: 2016,
    overview: 'Some overview',
    rating: '8.99',
    genres: ['Thriller', 'Action'],
    poster: 'https://image.tmdb.org/t/p/w400/swS3PsQYD3wGEWZwtgpUlGRMv1G.jpg',
  },
  {
    idImdb: '9',
    title: 'Movie #9',
    year: 2016,
    overview: 'Some overview',
    rating: '8.99',
    genres: ['Thriller', 'Action'],
    poster: 'https://image.tmdb.org/t/p/w400/swS3PsQYD3wGEWZwtgpUlGRMv1G.jpg',
  },
  {
    idImdb: '10',
    title: 'Movie #10',
    year: 2016,
    overview: 'Some overview',
    rating: '8.99',
    genres: ['Thriller', 'Action'],
    poster: 'https://image.tmdb.org/t/p/w400/swS3PsQYD3wGEWZwtgpUlGRMv1G.jpg',
  },
  {
    idImdb: '11',
    title: '11',
    year: 2016,
    overview: 'Some overview',
    rating: '8.99',
    genres: ['Thriller', 'Action'],
    poster: 'https://image.tmdb.org/t/p/w400/swS3PsQYD3wGEWZwtgpUlGRMv1G.jpg',
  },
];

describe('MoviesList Component', () => {
  // state.moviesList.data
  const initialState = {moviesList: {data: {movies}}};
  const mockStore = configureStore();
  let store;

  it('should render', () => {
    store = mockStore(initialState);
    const {getByTestId} = render(
      <Provider store={store}>
        <MoviesList fetchNextMovies={jest.fn} />
      </Provider>,
    );

    const list = getByTestId('movies-flatlist');
    expect(list).toBeTruthy();
  });

  it('should render movies cards', () => {
    store = mockStore(initialState);
    const {getAllByTestId} = render(
      <Provider store={store}>
        <MoviesList fetchNextMovies={jest.fn} />
      </Provider>,
    );

    const moviesCards = getAllByTestId('movieMiniature');

    expect(moviesCards).toHaveLength(movies.length);
  });

  it('should scrolls to bottom and fetch next movies', () => {
    const fetchNext = jest.fn();
    store = mockStore(initialState);
    const {getByTestId} = render(
      <Provider store={store}>
        <MoviesList fetchNextMovies={fetchNext} />
      </Provider>,
    );
    const flatList = getByTestId('movies-flatlist');
    fireEvent.scroll(flatList, {
      nativeEvent: {
        // Dimensions of the scrollable content
        contentSize: {height: 600, width: 400},
        contentOffset: {y: 550, x: 0},
        // Dimensions of the device
        layoutMeasurement: {height: 469, width: 328},
      },
    });

    expect(fetchNext).toBeCalled();
  });
});
