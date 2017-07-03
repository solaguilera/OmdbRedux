import React from 'react';
import {Link} from 'react-router';
import HomeButton from '../components/homebutton.jsx';
import FavButton from '../components/favbutton.jsx';
import Search from '../components/search.jsx';
import NameDisplay from '../components/namedisplay.jsx'; 
import SignOutButton from '../components/signoutbutton.jsx';

class NavBarUser extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className='navbarGuest'>
				<HomeButton />
				<Search />
				<FavButton />
				<NameDisplay />
				<SignOutButton />
			</div>
		);
	}
}

export default NavBarUser;