import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';

import MovieMiniature from '../../components/MovieMiniature';

describe('MovieMiniature Component', () => {
  it('should show the title', () => {
    const {getByText} = render(
      <MovieMiniature poster="" rating={5} title="Avengers" />,
    );
    expect(getByText('Avengers')).toBeTruthy();
  });
});
