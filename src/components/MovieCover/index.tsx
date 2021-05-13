import React from 'react';

import {ImageSourcePropType} from 'react-native';

import StarRating from 'react-native-star-rating';

import {Container, Cover} from './styles';

type MovieCoverProps = {
  source: ImageSourcePropType;
  width: number;
  height: number;
};

export const MovieCover: React.FC<MovieCoverProps> = ({
  source,
  width = 220,
  height = 150,
}: MovieCoverProps) => {
  return (
    <Container coverWidth={width} coverHeight={height}>
      <Cover source={source} />
    </Container>
  );
};

export default MovieCover;
