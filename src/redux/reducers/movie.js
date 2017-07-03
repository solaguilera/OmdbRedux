import {GET_MOVIE, FAILED_TO_FETCH, RECEIVE_MOVIE} from '../actions/actioncreators.js'

function movie(state={
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
			movie: [...state.movie,{
				title:null,
				imageUrl:null,
				director:null,
				year:null,
				origin:null,
				actors:null,
				writer:null,
				plot:null,
			}],
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

export default movie;