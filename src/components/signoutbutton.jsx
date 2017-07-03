import React from "react"

class SignOutButton extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<button name= 'signout' onClick=''>Sign Out</button>
			</div>
		);
	}
}

export default SignOutButton;