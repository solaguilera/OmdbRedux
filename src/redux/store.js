import {createStore, compose, applyMiddleware} from "redux";
import thunkMiddleware from 'redux-thunk';
import {syncHistoryWithStore} from "react-router-redux";
import {hashHistory} from "react-router";
// import the root reducer
import rootReducer from "./reducers/index.js";

//create an object for the default data

const defaultState ={
	movie: [],
	isFetching: false,
};

const store = createStore(rootReducer, defaultState, compose(
		applyMiddleware(thunkMiddleware)
	));

export const history = syncHistoryWithStore(hashHistory, store);

export default store;