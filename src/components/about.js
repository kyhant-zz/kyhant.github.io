import React, { Component } from 'react';

class About extends Component {
	constructor(props){
		super(props)
	}
	render(){
		if(this.props.selected === 'about'){
			return (
				<div className="container about yoSoy" id='about'>
					<p>Software engineer with a strong JavaScript background and experience in a range of technologies from React and Angular to Node/Express and SQL/Mongo databases. </p>
				</div>
			)
		}
	}
}

export default About;