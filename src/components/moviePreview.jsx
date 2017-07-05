import React, { Component, PropTypes } from 'react';
import {Link} from 'react-router';
import FavButton from './favbutton.jsx';

export default class MoviePreview extends React.Component {
	constructor (props) {
		super(props)
	}
	render() {
		return (
			<div className='moviePreview'>
				<Link to={`singlemovie/${this.props.id}`}>
					<img src='' className='previewImg' />
					<h3 className='title'>{this.props.movie}</h3>
					<h4 className='released'>{this.props.año}</h4>
					<FavButton />
				</Link>
			</div>

		)
	}
}
