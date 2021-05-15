import React from 'react';
import StarRating from 'react-native-star-rating';

import {Container, MaxRating, RatingValues, ImdbRating} from './styles';

type MovieRatingProps = {
  rating: number;
  starSize?: number;
  showValues?: boolean;
};

const MovieRating: React.FC<MovieRatingProps> = ({
  rating,
  starSize,
  showValues,
}) => {
  const MAX_STARS = 5;
  const IMDB_MAX_RATING = 10;
  const starRatingValue = (rating / IMDB_MAX_RATING) * MAX_STARS;

  return (
    <Container>
      <StarRating
        disabled={false}
        maxStars={MAX_STARS}
        rating={starRatingValue}
        starSize={starSize || 16}
        fullStarColor="#ffcc46"
        emptyStarColor="#444448"
        starStyle={{marginRight: 5}}
      />
      {showValues && (
        <RatingValues>
          <ImdbRating>{rating.toFixed(1)}</ImdbRating>
          <MaxRating>/10</MaxRating>
        </RatingValues>
      )}
    </Container>
  );
};

export default MovieRating;
