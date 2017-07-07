import React from 'react';
import Home from '../components/home.jsx';
import {Link} from 'react-router';
import SignInForm from '../components/signinForm.jsx';
import Favorites from '../components/favorites.jsx';
import MoviePreview from '../components/moviePreview.jsx';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as actionCreators from "../redux/actions/actioncreators.js";

function mapsStateToProps (state){
	return {
		movie: {
			movie: state.movie.movie,
			isFetching: state.movie.isFetching,
		},
		movies: {
			movies: state.movies.movies,
			isFetching: state.movies.isFetching,
		},
		user: {
			user: state.user.username,
			favorites: state.user.favorites,
			isFetching: state.user.isFetching,
			isLoggedIn: state.user.isLoggedIn,
		}
	};
}
function mapDispachToProps (dispatch){
	return bindActionCreators(actionCreators, dispatch);
}

class SignOut extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<Home />
			</div>
		)
	}
}

export default connect(mapsStateToProps, mapDispachToProps)(SignOut);
