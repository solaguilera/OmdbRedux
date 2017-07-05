import React from 'react';
import {Link} from 'react-router';
import SingleMovie from '../components/singleMovie.jsx'; 
import HomeButton from '../components/homebutton.jsx';
import SignUpButton from '../components/signupbutton.jsx';
import Search from '../components/search.jsx';
import SignInButton from '../components/signinbutton.jsx';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as actionCreators from "../redux/actions/actioncreators.js";
import Main from "../containers/main.jsx"

function mapsStateToProps (state){
	return {
		movie: {
			movie: state.movie.movie,
			isFetching: state.movie.isFetching,
		},
		movies: {
			movies: state.movies.movies,
			isFetching: state.movies.isFetching,
		}
	}
};

function mapDispachToProps (dispatch){
		return bindActionCreators(actionCreators, dispatch);
	}

class NavBarGuest extends React.Component {
	constructor(props) {
		super(props);
		this.find=this.find.bind(this)
	}
	
	find(peli){
		this.props.fetchMovies(peli);
	}

	render() {
		return (
			<div className='navbarGuest'>
				<HomeButton />
				<Search busqueda= {this.find} />
				<SignInButton />
				<SignUpButton />
			</div>
		);
	}
}

export default connect(mapsStateToProps, mapDispachToProps)(NavBarGuest);
