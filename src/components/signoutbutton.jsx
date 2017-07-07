import React from "react";
import {Link} from 'react-router';

class SignOutButton extends React.Component {
	constructor(props) {
		super(props);
		this.salir=this.salir.bind(this)
	}
	salir(e){
		e.preventDefault();
		this.props.signOutFetch()
	}
	render() {
		return (
			<div>
			<Link to='/'><button name= 'signout' onClick={this.salir}>Sign Out</button></Link>
			</div>
		);
	}
}

export default SignOutButton;
