import Button from '@components/Button';
import MovieCover from '@components/MovieCover';
import MovieRating from '@components/MovieRating';
import {capitalizeWord} from '@services/utils';
import React, {useEffect, useState} from 'react';
import {MovieDetailsScreenProps} from 'routes/types';

import {
  Container,
  Genres,
  MovieContent,
  MovieDescription,
  MovieDescriptionContent,
  MovieInfos,
  Title,
  Year,
} from './styles';

const MovieDetails: React.FC<MovieDetailsScreenProps> = ({route}) => {
  const {movie} = route.params;

  const MAX_GENRES = 2;
  const [movieGenres, setMovieGenres] = useState<string>('');

  const getGenres = () => {
    let firstsGenres = movie.genres.filter((item, index) => index < MAX_GENRES);
    firstsGenres = firstsGenres.map(genre => {
      return capitalizeWord(genre);
    });
    setMovieGenres(firstsGenres.join('/'));
  };

  useEffect(() => {
    getGenres();
  }, []);

  return (
    <Container>
      <MovieCover source={{uri: movie.poster}} width={200} height={260} />
      <MovieContent>
        <Title numberOfLines={2}>{movie.title}</Title>
        <MovieInfos>
          <Year>{movie.year}</Year>
          <Genres testID="movieGenres">{movieGenres}</Genres>
        </MovieInfos>
      </MovieContent>
      <MovieRating rating={movie.rating} showValues />
      <MovieDescriptionContent
        contentContainerStyle={{paddingBottom: 10}}
        showsVerticalScrollIndicator={false}>
        <MovieDescription>{movie.overview}</MovieDescription>
      </MovieDescriptionContent>

      <Button>Saiba mais</Button>
    </Container>
  );
};

export default MovieDetails;
