import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import {movie, movies} from './movie.js';


const rootReducer = combineReducers ({movie, movies, routing: routerReducer});

export default rootReducer;