import React from "react";
import {Link} from 'react-router';

class SignOutButton extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
			<Link to='/'><button name= 'signout' onClick=''>Sign Out</button></Link>
			</div>
		);
	}
}

export default SignOutButton;
