import React from "react"

class FavButton extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<button name= 'favorito' onClick=''>Fav</button>
			</div>
		);
	}
}

export default FavButton;