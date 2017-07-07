import React from "react"
import MoviePreview from './moviePreview.jsx'
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as actionCreators from "../redux/actions/actioncreators.js";
import Favorites from '../components/favorites.jsx';

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

class FavContainer extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		if (this.props.user.isLoggedIn){	
			if( this.props.user.favorites.length > 0){
				return (
					<div>
						<Favorites />
					</div>
				);
			} else{
				return (
					<div>PASAR PARA ARRIBA. Y ACA ESTE LO DEJO EN SÍ ACA COMO ESTÁ. ESTO HAY QUE REVISARLO!!!!
					{this.props.movies.movies.map((movie, i) => <MoviePreview {...this.props}  movie = {movie.Title}
						año = {movie.Year} poster= {movie.Poster} id = {movie.imdbID}
					 key={i} />)}
				</div>
				)
			}
		} else {return(<div><h1>YOU SHALL NOT PASS.</h1></div>)}	
	}
}

export default connect(mapsStateToProps, mapDispachToProps)(FavContainer);
