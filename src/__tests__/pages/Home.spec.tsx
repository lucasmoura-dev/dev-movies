import {fireEvent, render, waitFor} from '@testing-library/react-native';
import React from 'react';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import Home from '../../pages/Home';

describe('Home Page', () => {
  const initialState = {moviesList: {data: {movies: []}}};
  const mockStore = configureStore();
  let store;

  it('should be able to search', () => {
    store = mockStore(initialState);
    const {getByPlaceholderText} = render(
      <Provider store={store}>
        <Home />
      </Provider>,
    );

    const searchField = getByPlaceholderText('Buscar...');
    expect(searchField).toBeTruthy();
  });

  it('should be able to see movies list', () => {
    store = mockStore(initialState);
    const {getByTestId} = render(
      <Provider store={store}>
        <Home />
      </Provider>,
    );

    expect(getByTestId('movies-flatlist')).toBeTruthy();
  });
});
