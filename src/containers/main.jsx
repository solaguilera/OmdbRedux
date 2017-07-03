import React from "react";
import NavBarGuest from './navbarguest.jsx'

class Main extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div>
				<NavBarGuest />
				<h1>Que te Recontra, buscá la película</h1>
				{React.cloneElement(this.props.children, this.props)}
			</div>
		)
	}
};

export default Main;