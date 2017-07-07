import {GET_MOVIE, FAILED_TO_FETCH, RECEIVE_MOVIE, GET_MOVIES, RECEIVE_MOVIES, LOGIN, LOGUEADO, LOGOUT, DESLOGUEADO} from '../actions/actioncreators.js';

export function user(state={
	isFetching:false,
	user: null,
	favorites: [],
}, action) {
	switch(action.type){
	case LOGIN:
		return Object.assign({}, state,{
			isFetching: true,
			isLoggedIn: false,
		});
	case LOGUEADO:
		return Object.assign({}, state, {
			isFetching: false,
			isLoggedIn: true,
			user: action.user,
			favorites: action.favorites,
		});
	case LOGOUT:
		return Object.assign({}, state, {
			isFetching: true,
			isLoggedIn: true,
		});
	case DESLOGUEADO:
		return Object.assign({}, state, {
			isFetching: false,
			isLoggedIn: false,
		});
	default:
		return state;
	}
}

export function movie(state={
	isFetching:false,
	movie: [],
}, action) {
	switch(action.type){
	case GET_MOVIE:
		return Object.assign({}, state,{
			isFetching: true,
		});
	case RECEIVE_MOVIE:
		return Object.assign({}, state,{
			isFetching: false,
			movie: action.movie,
		});
	case FAILED_TO_FETCH:
		return Object.assign({}, state, {
			isFetching: false,
			error: action.err,
		});
	default:
		return state;
	}
}

export function movies(state={
	isFetching:false,
	movies: [],
}, action) {
	switch(action.type){
	case GET_MOVIES:
		return Object.assign({}, state,{
			isFetching: true,
		});
	case RECEIVE_MOVIES:
		return Object.assign({}, state,{
			isFetching: false,
			movies: action.movies.Search,
		});
	case FAILED_TO_FETCH:
		return Object.assign({}, state, {
			isFetching: false,
			error: action.err,
		});
	default:
		return state;
	}
}
