import React, { Component, PropTypes } from 'react';

export default class SignupForm extends React.Component {
	constructor (props) {
		super(props)
	}
	render() {
		return (
			<div className='signupDiv'>
				<form className='signupForm'>
					E-Mail:<input className='signupEmail' type='text' ref=''><br>
					Username:<input className='signupUser' type='text' ref=''><br>
					Password:<input className='signupPassword' type='text' ref=''><br>
					<button className='signupButton' onClick='' type='submit'>Sign Up</button>
				</form>
			</div>
		)
	}
}
