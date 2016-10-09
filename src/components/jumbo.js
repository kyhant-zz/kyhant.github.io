import React, { Component } from 'react';

class Jumbo extends Component {
	constructor(props) {
		super(props)
	}
	render(){
		return (
			<div className="jumbotron">
				<div className="container">
				  <h1>Hello, world!</h1>
				  <p>...</p>
				  <p><a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a></p>
				</div>	
			</div>
			)
	}
}

export default Jumbo