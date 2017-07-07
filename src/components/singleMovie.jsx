import React, { Component, PropTypes } from 'react';
import {Link, IndexLink} from 'react-router';
import FavButton from './favbutton.jsx';


export default class SingleMovie extends React.Component {
	constructor (props) {
		super(props)
	}
	render() {
		return (
			<div className='singleMovie'>
				<img src={this.props.detail.Poster} alt='' className='previewImg' />
				<h3>Title:</h3><h4 className='singleTitle'>{this.props.detail.Title}</h4>
				<h3>Year:</h3><h4 className='singleYear'>{this.props.detail.Year}</h4>
				<h3>Country:</h3><h4 className='singleCountry'>{this.props.detail.Country}</h4>
				<h3>Director:</h3><h4 className='singleDirector'>{this.props.detail.Director}</h4>
				<h3>Writer:</h3><h4 className='singleWriter'>{this.props.detail.Writer}</h4>
				<h3>Starring:</h3><h4 className='singleStarring'>{this.props.detail.Actors}</h4>
				<h3>Synopsis:</h3><h4 className='singlePlot'>{this.props.detail.Plot}</h4>
				<FavButton {...this.props}/>
			</div>
		)
	}
}
