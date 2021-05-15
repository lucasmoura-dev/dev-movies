import {MovieCover} from '@components/MovieCover';
import MovieRating from '@components/MovieRating';
import {apiTmdb} from '@services/api';
import {getPosterImageUri} from '@services/imageApi';
import React, {useEffect, useState} from 'react';

import {Container, Content, Title} from './styles';

interface MovieMiniatureProps {
  idImdb: string;
  title: string;
  rating: number;
}

const MovieMiniature: React.FC<MovieMiniatureProps> = ({
  idImdb,
  title,
  rating,
}) => {
  const [moviePoster, setMoviePoster] = useState<string>();

  const getMoviePoster = async () => {
    const {data} = await apiTmdb.get(`movie/${idImdb}`);
    const {poster_path: posterPath} = data;
    const posterFullUri = getPosterImageUri(posterPath);
    setMoviePoster(posterFullUri);
  };

  useEffect(() => {
    if (idImdb) {
      getMoviePoster();
    }
  }, []);

  return (
    <Container>
      <MovieCover source={{uri: moviePoster}} width={150} height={220} />
      <Content>
        <Title numberOfLines={1}>{title}</Title>
      </Content>
      <MovieRating rating={rating} />
    </Container>
  );
};

export default MovieMiniature;
