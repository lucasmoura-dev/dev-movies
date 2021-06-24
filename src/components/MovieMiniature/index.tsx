import {MovieCover} from '@components/MovieCover';
import MovieRating from '@components/MovieRating';
import React, {memo} from 'react';

import {Container, Content, Title} from './styles';

interface MovieMiniatureProps {
  title: string;
  rating: number;
  poster: string;
}

const MovieMiniature: React.FC<MovieMiniatureProps> = ({
  poster,
  title,
  rating,
}) => {
  return (
    <Container>
      <MovieCover source={{uri: poster}} width={150} height={220} />
      <Content>
        <Title numberOfLines={1}>{title}</Title>
      </Content>
      <MovieRating rating={rating} />
    </Container>
  );
};

export default memo(MovieMiniature);
