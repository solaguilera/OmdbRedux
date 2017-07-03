import React from 'react';
import {Link} from 'react-router';
import HomeButton from '../components/homebutton.jsx';
import SignUpButton from '../components/signupbutton.jsx';
import Search from '../components/search.jsx';
import SignInButton from '../components/signinbutton.jsx';

class NavBarGuest extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className='navbarGuest'>
				<HomeButton />
				<Search />
				<SignInButton />
				<SignUpButton />
			</div>
		);
	}
}

export default NavBarGuest;