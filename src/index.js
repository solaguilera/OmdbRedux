import React from 'react';
import ReactDOM from 'react-dom';
import{Router, Route, hashHistory, IndexRoute} from "react-router"
import {Provider} from 'react-redux';
import Main from './containers/main.jsx';
import App from './components/app.js';
import Store, {history} from './redux/store.js'
ReactDOM.render(
	<Provider store={Store}>
		<Router history={history}>
			<Route path="/" component={App}>
				<IndexRoute component={App} />
			</Route>
		</Router>
	</Provider>, document.getElementById("app"));