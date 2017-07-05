import React from 'react';
import {Link} from 'react-router';

class SignUpButton extends React.Component {
	constructor(props) {
		super(props);
	}
	showForm() {

	}
	render() {
		return (
			<div>
				<Link to='signup/'><button name= 'signup'>Sign Up</button></Link>
			</div>
		);
	}
}

export default SignUpButton;
