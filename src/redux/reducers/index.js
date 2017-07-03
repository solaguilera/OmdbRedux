import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import movie from './movie.js';
import movies from'./movies.js';

const rootReducer = combineReducers ({movie, movies, routing: routerReducer});

export default rootReducer;