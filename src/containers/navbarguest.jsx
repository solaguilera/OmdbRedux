import React from 'react';
import {Link} from 'react-router';
import SingleMovie from '../components/singleMovie.jsx';
import GoToFav from '../components/goToFav.jsx';
import HomeButton from '../components/homebutton.jsx';
import SignUpButton from '../components/signupbutton.jsx';
import Search from '../components/search.jsx';
import SignInButton from '../components/signinbutton.jsx';
import SignOutButton from '../components/signoutbutton.jsx';
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
		},
		user: {
			username: state.user.username,
			favorites: state.user.favorites,
			isFetching: state.user.isFetching,
			isLoggedIn: state.user.isLoggedIn,
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
		// console.log(this.props.user.username)
		if (!this.props.user.isLoggedIn) {
			return (
				<div className='navbarGuest'>
					<HomeButton />
					<Search busqueda= {this.find} />
					<SignInButton />
					<SignUpButton />
				</div>
			)
		} else {
			return (
				<div className='navbarUser'>
					<HomeButton />
					<Search busqueda= {this.find} />
					<span>{this.props.user.username}</span>
					<GoToFav />
					<SignOutButton signOutFetch= {this.props.signOut}/>
				</div>
			)
		}
	}
}

export default connect(mapsStateToProps, mapDispachToProps)(NavBarGuest);
