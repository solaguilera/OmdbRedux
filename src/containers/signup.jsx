import React from 'react';
import Home from '../components/home.jsx';
import {Link} from 'react-router';
import SignUpForm from '../components/signupForm.jsx';
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
			isFetching: state.user.isFetching
		}
	};
}
function mapDispachToProps (dispatch){
	return bindActionCreators(actionCreators, dispatch);
}

class Signup extends React.Component {
	constructor(props) {
		super(props);
		this.create=this.create.bind(this)
	}
	create(registro) {
		this.props.createUser(registro);
	}
		render() {
			return (
				<div className='signupContainer'>
					<SignUpForm create={this.create}/>
				</div>
			);
		}
}

export default Signup;
