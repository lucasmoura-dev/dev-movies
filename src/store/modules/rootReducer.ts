import {combineReducers} from 'redux';

import moviesList from './movies/reducer';
import favoritesMovies from './favoritesMovies/reducer';

export default combineReducers({
  moviesList,
  favoritesMovies,
});
