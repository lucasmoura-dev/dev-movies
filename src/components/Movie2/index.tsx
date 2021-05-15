import React, {useEffect, useState} from 'react';

import StarRating from 'react-native-star-rating';

import MovieCover from '@components/MovieCover';

import {TextStyle} from 'react-native';
import MovieRating from '@components/MovieRating';
import {IMovie} from 'store/modules/movies/types';
import {apiTmdb} from '@services/api';
import {getPosterImageUri} from '@services/imageApi';
import {capitalizeWord} from '@services/utils';
import {Container, Title, Content, MovieInfos, Genres, Year} from './styles';

export const Movie: React.FC<IMovie> = ({
  idImdb,
  title,
  year,
  rating,
  genres: genresArray,
}) => {
  const MAX_GENRES = 2;
  const [moviePoster, setMoviePoster] = useState();
  const [movieGenres, setMovieGenres] = useState('');

  const getMoviePoster = async () => {
    const {data} = await apiTmdb.get(`movie/${idImdb}`);
    const {poster_path: posterPath} = data;
    const posterFullUri = getPosterImageUri(posterPath);
    setMoviePoster(posterFullUri);
  };

  const getGenres = () => {
    let firstsGenres = genresArray.filter((item, index) => index < MAX_GENRES);
    firstsGenres = firstsGenres.map(genre => {
      return capitalizeWord(genre);
    });
    setMovieGenres(firstsGenres.join('/'));
  };

  useEffect(() => {
    if (idImdb) {
      getMoviePoster();
    }
    getGenres();
  }, []);

  return (
    <Container>
      <MovieCover source={{uri: moviePoster}} width={200} height={260} />
      <Content>
        <Title numberOfLines={2}>{title}</Title>
        <MovieInfos>
          <Year>{year}</Year>
          <Genres>{movieGenres}</Genres>
        </MovieInfos>
      </Content>
      <MovieRating rating={rating} showValues />
    </Container>
  );
};

export default Movie;
