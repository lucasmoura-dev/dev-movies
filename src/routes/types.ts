import {StackScreenProps} from '@react-navigation/stack';
import {IMovie} from 'store/modules/movies/types';

type RootStackParamList = {
  Home: undefined;
  MovieDetails: {movie: IMovie};
};

export type MovieDetailsScreenProps = StackScreenProps<
  RootStackParamList,
  'MovieDetails'
>;
