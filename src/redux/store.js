import {createStore, compose, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {syncHistoryWithStore} from 'react-router-redux';
import {hashHistory} from 'react-router';
import rootReducer from './reducers/index.js';

const defaultState ={
	movie: {
		movie: [],
		isFetching: false,
	},
	movies: {
		movies: [],
		isFetching: false,
	},
	user: {
		username: null,
		favorites: [],
		isFetching: false,
		isLoggedIn: false,
	}
};

const store = createStore(rootReducer, defaultState, compose(
		applyMiddleware(thunkMiddleware)
	));

export const history = syncHistoryWithStore(hashHistory, store);

export default store;
