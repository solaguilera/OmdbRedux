export const GET_MOVIES= 'GET_MOVIES';
export function getMovies(movies){
	return{
		type: GET_MOVIES,
		isFetching:true
	}
};
export const RECEIVE_MOVIES= 'RECEIVE_MOVIES';
export function receiveMovies(movies){
	console.log("action receiveMovies", movies)
	return {
		type: RECEIVE_MOVIES,
		movies
	}
}
/////////
export const GET_MOVIE= 'GET_MOVIE';
export function getMovie (movie){
	return{
		type: GET_MOVIE,
		movie
	}
};
export const RECEIVE_MOVIE= 'RECEIVE_MOVIE';
export function receiveMovie(movie){
	return{
		type: RECEIVE_MOVIE,
		movie
	}
}
/////////
export const FAILED_TO_FETCH= 'FAILED_TO_FETCH';
export function failedToFetch(err){
	return{
		type: FAILED_TO_FETCH,
		err
	}
};
////////
export const ADD_FAV='ADD_FAV';
export function addfav (movie){
	return {
		type: ADD_FAV,
		movie
	}
};
/////////
export function fetchMovies(movies){
	return(dispatch) => {
		dispatch(getMovies(movies));
		return fetch(`http://www.omdbapi.com/?apikey=20dac387&s=${movies}`)
			.then(response => response.json())
			.then(data => dispatch(receiveMovies(data)))
			.catch(err=> dispatch(failedToFetch(err)));
	}
}

export function fetchMovie(movie){
	return(dispatch) => {
		dispatch(getMovie(movie));
		return fetch (`http://www.omdbapi.com/?apikey=20dac387&i=${movie}`)
			.then(response => response.json())
			.then(data => dispatch(receiveMovie(data)))
			.catch(err=> dispatch(failedToFetch(err)));
	}
}