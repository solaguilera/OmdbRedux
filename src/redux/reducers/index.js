import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import {movie, movies, user} from './movie.js';


const rootReducer = combineReducers ({movie, movies, user, routing: routerReducer});

export default rootReducer;
