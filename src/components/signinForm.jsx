import React, { Component, PropTypes } from 'react';

export default class SigninForm extends React.Component {
	constructor (props) {
		super(props);
		this.entrar=this.entrar.bind(this)
	}
	entrar(e) {
		e.preventDefault();
		const entrarAdentro= {
			username: this.refs.username.value,
			password: this.refs.password.value,
		}
		this.props.signinFetch(entrarAdentro)
	}
	render() {
		return (
			<div className='signinDiv'>
				<form onSubmit={this.entrar} className='signinForm'>
					Username:<input className='signinUser' type='text' ref='username' /><br />
					Password:<input className='signinPassword' type='text' ref='password' /><br />
					<input type='submit' value='submit' />
				</form>
			</div>
		)
	}
}
