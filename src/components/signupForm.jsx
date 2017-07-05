import React, { Component, PropTypes } from 'react';

export default class SignupForm extends React.Component {
	constructor (props) {
		super(props);
		this.signUp=this.signUp.bind(this);
	}
	signUp() {
		const registro = {
			email: this.refs.email.value,
			username: this.refs.username.value,
			password: this.refs.password.value
		}
		this.props.create(registro);
	}
	render() {
		return (
			<div className='signupDiv'>
				<form className='signupForm'>
					E-Mail:<input className='signupEmail' type='text' ref='email' /><br />
					Username:<input className='signupUser' type='text' ref='username' /><br />
					Password:<input className='signupPassword' type='text' ref='password' /><br />
					<button className='signupButton' onClick={this.signUp} type='submit'>Sign Up</button>
				</form>
			</div>
		)
	}
}
