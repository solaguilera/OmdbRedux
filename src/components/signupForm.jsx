import React, { Component, PropTypes } from 'react';

export default class SignupForm extends Component {
	constructor (props, context) {
		super(props, context)
	}
	render() {
		return (
			<div className='signupDiv'>
				<form className='signupForm'>
					E-Mail:<input className='signupEmail' type='text'><br>
					Username:<input className='signupUser' type='text'><br>
					Password:<input className='signupPassword' type='text'><br>
					<button className='signupButton' onClick='' type='submit'>Sign Up</button>
				</form>
			</div>
		)
	}
}
