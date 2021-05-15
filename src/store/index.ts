import {applyMiddleware, createStore, Reducer} from 'redux';
import promise from 'redux-promise-middleware';
import axios from 'axios';

import rootReducer from './modules/rootReducer';
// import {moviesReducer} from './modules/movies/reducer';

const middlewares: any[] = [];

/*
Promise
pending
fulfilled
rejected
*/
/*
type IMovieIds = {
  trakt: number;
  slug: string;
  imdb: string;
  tmdb: number;
};

type IMovie = {
  title: string;
  year: number;
  ids: IMovieIds;
};

type IMoviesState = {
  movies: IMovie[];
  sendingRequest: boolean;
  requestRecieved: boolean;
  status: string;
  errorMessage: string;
};

const INITIAL_STATE: IMoviesState = {
  movies: [],
  sendingRequest: false,
  requestRecieved: false,
  status: '',
  errorMessage: '',
};

const moviesReducer: Reducer<IMoviesState> = (
  state = INITIAL_STATE,
  action: any,
) => {
  switch (action.type) {
    case 'FETCH_MOVIES_PENDING': {
      console.log('carregando filmes');
      return {
        ...state,
        sendingRequest: true,
        requestRecieved: false,
        status: 'pending',
      };
      break;
    }
    case 'FETCH_MOVIES_FULFILLED': {
      const {data: movies} = action.payload;

      const response = {
        ...state,
        sendingRequest: false,
        requestRecieved: true,
        status: 'success',
        movies,
      };
      return response;
    }
    case 'FETCH_MOVIES_REJECTED': {
      console.log('erro para carregar os filmes');
      const response = {
        ...state,
        sendingRequest: false,
        requestRecieved: false,
        status: 'error',
        errorMessage: `${action.payload.message}`,
      };
      console.log(response);
      return response;
    }
    default:
      return state;
  }
}; */

// const store = createStore(moviesReducer, applyMiddleware(promise));
const store = createStore(rootReducer, applyMiddleware(promise));

/* store.dispatch({
  type: 'FETCH_MOVIES',
  payload: axios.get(
    'https://qweqprivate-anon-595b42afb2-trakt.apiary-mock.com/movies/popular',
  ),
}); */

export default store;
