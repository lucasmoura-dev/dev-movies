import {fireEvent, render} from '@testing-library/react-native';
import React from 'react';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import Home from '../../pages/Home';

jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: jest.fn(),
  };
});

describe('Home Page', () => {
  const initialState = {moviesList: {}};
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

    fireEvent.changeText(searchField, 'Deadpool');
    fireEvent(searchField, 'submitEditing');

    expect(getByPlaceholderText('Buscar...')).toBeTruthy();
  });
});
