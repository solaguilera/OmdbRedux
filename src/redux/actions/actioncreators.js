import fetch from 'isomorphic-fetch';


export const GET_FAVORITES= 'GET_FAVORITES';
export function getFavorites(){
	return {
		type: GET_FAVORITES,
	}
}
export const RECEIVE_FAVORITES = 'RECEIVE_FAVORITES';
export function receiveFavorites(favorites){
	return {
		type: RECEIVE_FAVORITES,
		favorites
	}
}

export const REGISTER = 'REGISTER';
export function register() {
	return {
		type: REGISTER,
	};
}
export const REGISTRADO = 'REGISTRADO';
export function registrado(user) {
	return {
		type: REGISTRADO,
		user
	};
}
export const FAILED_TO_REGISTER= 'FAILED_TO_REGISTER';
export function failedToRegister(err){
	return{
		type: FAILED_TO_REGISTER,
		err
	};
}
export const LOGIN = 'LOGIN';
export function login() {
	return {
		type: LOGIN,
	};
}
export const LOGUEADO = 'LOGUEADO';
export function logueado(user) {
	console.log('actionnnnn',user)
	return {
		type: LOGUEADO,
		user: user.user,
		favorites: user.favorites,
	};
}
export const FAILED_TO_LOGIN= 'FAILED_TO_LOGIN';
export function failedToLogin(err){
	return{
		type: FAILED_TO_LOGIN,
		err
	};
}
export const LOGOUT = 'LOGOUT';
export function logout() {
	return {
		type:LOGOUT,
	};
}
export const DESLOGUEADO = 'DESLOGUEADO';
export function deslogueado() {
	return {
		type: DESLOGUEADO,
	};
}

export const GET_MOVIES= 'GET_MOVIES';
export function getMovies(){
	return{
		type: GET_MOVIES,
	};
}
export const RECEIVE_MOVIES= 'RECEIVE_MOVIES';
export function receiveMovies(movies){
	// console.log("action receiveMovies", movies)
	return {
		type: RECEIVE_MOVIES,
		movies
	};
}
/////////
export const GET_MOVIE= 'GET_MOVIE';
export function getMovie (movie){
	return{
		type: GET_MOVIE,
		movie
	};
}
export const RECEIVE_MOVIE= 'RECEIVE_MOVIE';
export function receiveMovie(movie){
	return{
		type: RECEIVE_MOVIE,
		movie
	};
}
/////////
export const FAILED_TO_FETCH= 'FAILED_TO_FETCH';
export function failedToFetch(err){
	return{
		type: FAILED_TO_FETCH,
		err
	};
}
////////
export const ADD_FAV='ADD_FAV';
export function addfav (movie){
	return {
		type: ADD_FAV,
		movie
	};
}
/////////

export function fetchMovies(movies){
	return(dispatch) => {
		dispatch(getMovies(movies));
		return fetch(`http://www.omdbapi.com/?apikey=20dac387&s=${movies}`)
			.then(response => response.json())
			.then(data => dispatch(receiveMovies(data)))
			.catch(err=> dispatch(failedToFetch(err)));
	};
}

export function fetchMovie(movie){
	return(dispatch) => {
		dispatch(getMovie(movie));
		return fetch(`http://www.omdbapi.com/?apikey=20dac387&i=${movie}`)
			.then(response => response.json())
			.then(data => dispatch(receiveMovie(data)))
			.catch(err=> dispatch(failedToFetch(err)));
	};
}

export function createUser(user){
	return(dispatch) => {
		dispatch(register(user));
		return fetch('http://localhost:8080/users/signup', {
			method: 'POST',
			headers: {
				"Accept":"application/json",
				"Content-Type":"application/json",
			},
			body: JSON.stringify(user)
		})
		.then(response => response.json())
		.then(data => dispatch(logueado(data)));
	};
}
//////////
export function signIn(user) {
	return (dispatch) => {
		dispatch(login(user));
		return fetch('http://localhost:8080/users/signin',{
			method: 'POST',
			credentials: 'include',
			headers: {
				"Accept":"application/json",
				"Content-Type":"application/json",
			},
			body: JSON.stringify(user)
		})
		.then(response => response.json())
		.then( data => {
			if (data.success) {
				console.log(data, 'then de fetch');
				dispatch(logueado(data));
			} else {
				console.log(data, 'else de fetch');
				dispatch(failedToLogin());
			}
		});
	};
}
export function signOut(user){
	return (dispatch) => {
		dispatch(logout(user));
		return fetch('http://localhost:8080/users/signout', {
			method: 'POST',
			credentials: 'include',
			headers: {
				"Accept":"application/json",
				"Content-Type":"application/json",
			},
			body: JSON.stringify(user)
		})
			.then(response=> response.json())
			.then(data => dispatch(deslogueado(data)));
	};
}

export function persistencia(user) {
	return (dispatch) => {
		dispatch(login(user));
		return fetch('http://localhost:8080/users',{
			method: 'GET',
			credentials: 'include',
			headers: {
				"Accept":"application/json",
				"Content-Type":"application/json",
			},
			body: JSON.stringify(user)
		})
		.then(response => response.json())
		.then( data => {
			if (data.success) {
				console.log(data, 'persistenciaaaaa');
				dispatch(logueado(data));
			} else {
				console.log(data, 'errorrr de persistencia');
				dispatch(failedToLogin());
			}
		});
	};
}

export function favoritos(favorites) {
	return(dispatch)=> {
		dispatch(getFavorites(favorites));
		return fetch ('http://localhost:8080/users/favorites', {
			method: 'GET',
			credentials: 'include',
			headers: {
				"Accept":"application/json",
				"Content-Type":"application/json",
			},
			body: JSON.stringify(favorites)	
		})
		.then (response=> response.json())
		.then(data => {
			if(data.success) {
				dispatch(receiveFavorites(data));
			} else {
				dispatch(failedToFetch());
			}
		});
	};
}