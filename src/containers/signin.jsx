import React from 'react';
import Home from '../components/home.jsx';
import {Link} from 'react-router';
import SignInForm from '../components/signinForm.jsx';
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

class Signin extends React.Component {
	constructor(props) {
		super(props);

	}
	// componentWillMount() {
	// 	console.log(this.props)
	// }
	// signinFetch(entrarAdentro) {
	// 	this.props.signIn(entrarAdentro);
	// }
		render() {
			// if (this.props.user.isLoggedIn) {
			// 	return(<div><h1>hola</h1></div>)
			// } else{
			return (
				<div className='signinContainer'>
					<SignInForm signinFetch={this.props.signIn}/>
				</div>
			);
			// }
		}
}

export default connect(mapsStateToProps, mapDispachToProps)(Signin);
