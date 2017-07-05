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

class SingleContainer extends React.Component {
	constructor(props) {
		super(props);
	}
	
	// getOne({this.props.params.movieId}){
	// 	this.props.fetchMovie(this.props.params.movieId)
	// }
	componentWillMount() {
		console.log(this.props.params.movieId)
			this.props.fetchMovie(this.props.params.movieId)
	}

	render() {
		if(this.props.movie.movie){
		return (
			<div>
				<SingleMovie detail={this.props.movie.movie}/>
			</div>
		)}
		else{return <p>Loading</p>};
	}
}

export default connect(mapsStateToProps, mapDispachToProps)(SingleContainer);
