import React, { Component, PropTypes } from 'react';
import {Link, IndexLink} from 'react-router';
import FavButton from './favbutton.jsx';

export default class MoviePreview extends Component {
	constructor (props, context) {
		super(props, context)
	}
	render() {
		return (
			<div className='moviePreview'>
				<img src='' alt='' className='previewImg'>
				<h3 className='previewTitle'></h3><h4 className='previewYear'></h4>
				<FavButton />
			</div>
		)
	}
}
