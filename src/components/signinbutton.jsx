import React from "react";
import {Link} from 'react-router';

class SignInButton extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<Link to='signin/'><button name= 'signin' onClick=''>Sign In</button></Link>
			</div>
		);
	}
}

export default SignInButton;
