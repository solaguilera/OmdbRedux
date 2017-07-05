import React from "react"

class Search extends React.Component {
	constructor(props) {
		super(props);
		this.search= this.search.bind(this)
	}
	search(e){
		e.preventDefault();
		var peli = this.refs.search.value
		this.props.busqueda(peli)
	}
	render() {
		return (
			<div>
				<form>
					<input type='text' placeholder='Enter movie title here' ref='search' />
					<button type= 'submit' onClick={this.search}>Search!</button>
				</form>
			</div>
		);
	}
}

export default Search;