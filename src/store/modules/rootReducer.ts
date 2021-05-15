import {combineReducers} from 'redux';

import moviesList from './movies/reducer';
import moviesCatalog from './MovieDetails/reducer';

export default combineReducers({
  moviesList,
  moviesCatalog,
});
