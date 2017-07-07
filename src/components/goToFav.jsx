import React from 'react';
import {Link} from 'react-router';

class GoToFav extends React.Component {
	constructor(props) {
		super(props);
	}
	showForm() {

	}
	render() {
		return (
			<div>
				<Link to='favorites/'><button name= 'favorites'>Your Favorites</button></Link>
			</div>
		);
	}
}

export default GoToFav;
