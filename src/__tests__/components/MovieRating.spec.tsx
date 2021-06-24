import React from 'react';
import {render} from '@testing-library/react-native';

import MovieRating from '../../components/MovieRating';

describe('MovieRating Component', () => {
  it('should show the rating text', () => {
    const {getByTestId} = render(<MovieRating rating={8.6} showValues />);
    expect(getByTestId('ratingValue')).toBeTruthy();
  });

  it('should hide the rating text', () => {
    const {queryByTestId} = render(
      <MovieRating rating={8.6} showValues={false} />,
    );

    expect(queryByTestId('ratingValue')).toBeNull();
  });
});
