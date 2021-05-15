import {applyMiddleware, createStore} from 'redux';
import promise from 'redux-promise-middleware';
import {IMoviesListState} from './modules/movies/types';

import rootReducer from './modules/rootReducer';

export interface IState {
  moviesList: IMoviesListState;
}

const store = createStore(rootReducer, applyMiddleware(promise));

export default store;
