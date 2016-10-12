import React, { Component } from 'react';

class Jumbo extends Component {
	constructor(props) {
		super(props)
	}

	render(){
		return (
			<div className="jumbotron">
				<div className="container">
				  <h1>Kyhan Turner</h1>
				  <p className='description'>
				  	{this.props.description}
					</p>
			  </div>
			</div>
		)
	}
}

export default Jumbo