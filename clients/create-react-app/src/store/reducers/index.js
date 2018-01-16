import { combineReducers } from 'redux';
import MoviesReducers from './movies';

const reducers = combineReducers({
    movies: MoviesReducers
});

export default reducers;