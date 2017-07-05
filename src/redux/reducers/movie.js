import {GET_MOVIE, FAILED_TO_FETCH, RECEIVE_MOVIE, GET_MOVIES, RECEIVE_MOVIES} from '../actions/actioncreators.js';


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
