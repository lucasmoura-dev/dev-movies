import MovieMiniature from '@components/MovieMiniature';
import {useNavigation} from '@react-navigation/native';
import React, {useCallback} from 'react';

import {FlatList, ListRenderItemInfo} from 'react-native';
import {useSelector} from 'react-redux';
import {IMovie, IMoviesList} from 'store/modules/movies/types';

import {Container, MovieWrapper} from './styles';

type MoviesListProps = {
  fetchNextMovies: () => void;
};

const MoviesList: React.FC<MoviesListProps> = ({fetchNextMovies}) => {
  const navigation = useNavigation();
  const moviesList = useSelector<any, IMoviesList>(state => {
    return state.moviesList.data;
  });

  const renderItem = useCallback(
    ({item: movie}: ListRenderItemInfo<IMovie>) => {
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
    },
    [moviesList],
  );

  return (
    <Container>
      <FlatList
        renderItem={renderItem}
        data={moviesList.movies}
        onEndReachedThreshold={0.4}
        onEndReached={() => fetchNextMovies()}
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
