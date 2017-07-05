import React from "react";
import NavBarGuest from './navbarguest.jsx'
import Home from '../components/home.jsx';

class Main extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div>
				<NavBarGuest  />
				{this.props.children}
			</div>
		)
	}
};

export default Main;