import Button from '@components/Button';
import Movie from '@components/Movie';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';

import {
  Container,
  MovieDescription,
  MovieDescriptionContent,
  ReadMore,
} from './styles';

const MovieDetails: React.FC = () => {
  const movie = {
    id: 3,
    title: 'Coringa',
    year: 2019,
    rating: 8.4,
    duration: '2h 2min',
    about:
      'In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker.',
    categories: ['Crime', 'Drama', 'Thriller'],
    cover:
      'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/xLxgVxFWvb9hhUyCDDXxRPPnFck.jpg',
  };

  return (
    <Container>
      <Movie
        title={movie.title}
        titleStyle={{fontSize: 30}}
        cover={movie.cover}
        coverWidth={200}
        coverHeight={260}
        showFullRating
        showInfos
      />
      <MovieDescriptionContent
        contentContainerStyle={{paddingBottom: 10}}
        showsVerticalScrollIndicator={false}>
        <MovieDescription>{movie.about}</MovieDescription>
      </MovieDescriptionContent>

      <Button>Saiba mais</Button>
    </Container>
  );
};

export default MovieDetails;
