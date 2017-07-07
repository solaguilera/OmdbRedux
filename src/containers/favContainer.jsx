import React from "react"
import MoviePreview from './moviePreview.jsx'
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

class FavContainer extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		if( this.props.movies.movies.length === 0){
			return (
				<div>

				</div>
			);
		} else{
			return (
				<div>
				{this.props.movies.movies.map((movie, i) => <MoviePreview {...this.props}  movie = {movie.Title}
					año = {movie.Year} poster= {movie.Poster} id = {movie.imdbID}
				 key={i} />)}
			</div>
			)
		}
	}
}

export default connect(mapsStateToProps, mapDispachToProps)(FavContainer);
