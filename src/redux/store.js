import {createStore, compose} from "redux";
import {syncHistoryWithStore} from "react-router-redux";
import {hashHistory} from "react-router";

// import the root reducer
import rootReducer from "./reducers/index.js";

//create an object for the default data

const defaultState ={
	movie: [],
};

const store= createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(hashHistory, store);

export default store;