import React, { Component, PropTypes } from 'react';

export default class SigninForm extends Component {
	constructor (props, context) {
		super(props, context)
	}
	render() {
		return (
			<div className='signinDiv'>
				<form className='signinForm'>
					Username:<input className='signinUser' type='text'><br>
					Password:<input className='signinPassword' type='text'><br>
					<button className='signinButton' onClick='' type='submit'>Sign In</button>
				</form>
			</div>
		)
	}
}
