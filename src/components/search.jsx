import React from "react"

class Search extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<form onSubmit=''>
					<input type='text' placeholder='Search here' ref='search' />
				</form>
			</div>
		);
	}
}

export default Search;