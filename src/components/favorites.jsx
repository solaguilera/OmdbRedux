import React, { Component, PropTypes } from 'react';
import {Link} from 'react-router';

export default class Favorites extends React.Component {
	constructor (props) {
		super(props)
	}
	render() {
		return (
			<div className='favoritesPreview'>
				I FAVOUR IT
				<Link to={`singlemovie/${this.props.id}`}>
					<img src={this.props.poster} className='previewImg' />
					<h3 className='title'>{this.props.movie}</h3>
					<h4 className='released'>{this.props.año}</h4>
				</Link>
			</div>
		)
	}
}
