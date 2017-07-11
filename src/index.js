import React from 'react';
import ReactDOM from 'react-dom';
import{Router, Route, hashHistory, IndexRoute} from 'react-router';
import {Provider} from 'react-redux';
import Main from './containers/main.jsx';
import App from './components/app.js';
import store, {history} from './redux/store.js';
import Search from './components/search.jsx';
import Home from './components/home.jsx';
import SingleContainer from './containers/singlecontainer.jsx';
import SignUp from './containers/signup.jsx';
import SignIn from './containers/signin.jsx';
import FavContainer from './containers/favContainer.jsx';

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={App}>
				<IndexRoute component={Home} />
				<Route path= 'singlemovie/:movieId' component= {SingleContainer}/>
				<Route path= 'signup/' component= {SignUp} />
				<Route path= 'signin/' component= {SignIn} />
				<Route path= 'favorites/' component= {FavContainer} />
			</Route>
		</Router>
	</Provider>, document.getElementById("app"));
