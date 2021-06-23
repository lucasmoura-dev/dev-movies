import MovieMiniature from '@components/MovieMiniature';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';
import {IMovie} from 'store/modules/movies/types';

import {Container, MovieWrapper} from './styles';

type MoviesListProps = {
  moviesList: IMovie[];
};

const MoviesList: React.FC<MoviesListProps> = ({moviesList}) => {
  const navigation = useNavigation();

  const renderItem = ({item: movie}: ListRenderItemInfo<IMovie>) => {
    return (
      <MovieWrapper
        onPress={() => navigation.navigate('MovieDetails', {movie})}>
        <MovieMiniature
          poster={movie.poster}
          title={movie.title}
          rating={movie.rating}
        />
      </MovieWrapper>
    );
  };

  return (
    <Container>
      <FlatList
        renderItem={renderItem}
        data={moviesList}
        numColumns={2}
        horizontal={false}
        showsVerticalScrollIndicator={false}
        keyExtractor={movie => movie.idImdb}
        columnWrapperStyle={{
          justifyContent: 'space-between',
        }}
      />
    </Container>
  );
};

export default MoviesList;
