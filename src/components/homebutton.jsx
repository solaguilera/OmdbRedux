import React from "react";
import Link from 'react-router';

class HomeButton extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<Link to=''>Home</Link>
		);
	}
}

export default HomeButton;