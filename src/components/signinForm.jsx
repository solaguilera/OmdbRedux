import React, { Component, PropTypes } from 'react';

export default class SigninForm extends React.Component {
	constructor (props) {
		super(props)
	}
	render() {
		return (
			<div className='signinDiv'>
				<form className='signinForm'>
					Username:<input className='signinUser' type='text' ref=''><br>
					Password:<input className='signinPassword' type='text' ref=''><br>
					<button className='signinButton' onClick='' type='submit'>Sign In</button>
				</form>
			</div>
		)
	}
}
