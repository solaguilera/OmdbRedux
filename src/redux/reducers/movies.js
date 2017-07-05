// import {GET_MOVIES, FAILED_TO_FETCH, RECEIVE_MOVIES} from '../actions/actioncreators.js'

// function movies(state={
// 	isFetching:false,
// 	movie: [],
// }, action) {
// 	switch(action.type){
// 		case GET_MOVIES:
// 		return Object.assign({}, state,{
// 			isFetching: true,
// 		});
// 		case RECEIVE_MOVIES:
// 		return Object.assign({}, state,{
// 			isFetching: false,
// 			movie: [...state.movie,{
// 				title:null,
// 				imageUrl:null,
// 				year:null,
// 			}],
// 		});
// 		case FAILED_TO_FETCH:
// 		return Object.assign({}, state, {
// 			isFetching: false,
// 			error: action.err,
// 		});
// 		default:
// 			return state;
// 	}
// }

// export default movies;