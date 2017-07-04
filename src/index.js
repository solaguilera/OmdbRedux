import React from 'react';
import ReactDOM from 'react-dom';
import{Router, Route, hashHistory, IndexRoute} from "react-router"
import {Provider} from 'react-redux';
import Main from './containers/main.jsx';
import App from './components/app.js';
import store, {history} from './redux/store.js';
import Search from './components/search.jsx';

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={App}>
				<IndexRoute component={Search} />
				<Route path= '/' />
			</Route>
		</Router>
	</Provider>, document.getElementById("app"));