import React from 'react';

import StarRating from 'react-native-star-rating';

import MovieCover from '@components/MovieCover';

import {TextStyle} from 'react-native';
import MovieRating from '@components/MovieRating';
import {
  Container,
  Cover,
  Title,
  Stars,
  Content,
  MovieInfos,
  Categories,
  Duration,
  Year,
  MaxRating,
  RatingValues,
} from './styles';

type MovieProps = {
  cover: string;
  title: string;
  year?: number;
  categories?: string[];
  duration?: number;
  rating?: number;
  description?: string;

  titleStyle?: TextStyle;
  showYear?: boolean;
  coverWidth?: number;
  coverHeight?: number;
  showInfos?: boolean;
  showFullRating?: boolean;
  showDescription?: boolean;
};

export const Movie: React.FC<MovieProps> = ({
  cover,
  title,
  showYear,
  coverWidth,
  coverHeight,
  titleStyle,
  showInfos,
  showFullRating,
}) => {
  return (
    <Container coverWidth={coverWidth} coverHeight={coverHeight}>
      <MovieCover
        source={{uri: cover}}
        width={coverWidth || 150}
        height={coverHeight || 220}
      />
      <Content>
        <Title numberOfLines={1} style={titleStyle}>
          {title}
        </Title>
        {showInfos && (
          <MovieInfos>
            <Year>2020</Year>
            <Categories>Horror/Thriller</Categories>
            <Duration>2h 14min</Duration>
          </MovieInfos>
        )}
      </Content>
      <MovieRating rating={6.7} showValues={showFullRating} />
    </Container>
  );
};

export default Movie;
