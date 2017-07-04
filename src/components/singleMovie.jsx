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
				<img src='' alt='' className='previewImg'>
				<h3>Title:</h3><h4 className='singleTitle'></h4>
				<h3>Year:</h3><h4 className='singleYear'></h4>
				<h3>Country:</h3><h4 className='singleCountry'></h4>
				<h3>Director:</h3><h4 className='singleDirector'></h4>
				<h3>Writer:</h3><h4 className='singleWriter'></h4>
				<h3>Starring:</h3><h4 className='singleStarring'></h4>
				<h3>Synopsis:</h3><h4 className='singlePlot'></h4>
				<FavButton />
			</div>
		)
	}
}
