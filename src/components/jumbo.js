import React, { Component } from 'react';

class Jumbo extends Component {
	constructor(props) {
		super(props)
	}
	render(){
		return (
			<div className="jumbotron">
			  <h1>Portfolio</h1>
			  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?
				</p>
			  <p><a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a></p>
			</div>
			)
	}
}

export default Jumbo