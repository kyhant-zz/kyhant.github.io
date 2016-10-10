import React, { Component } from 'react';

class About extends Component {
	constructor(props){
		super(props)
	}
	render(){
		if(this.props.selected === 'about'){
			return (
				<div className="container about animated fadeIn">
					<div className="about-text">
						<p><img className='about-portrait' src='../../images/kyhan_portrait.jpg' />
							Motorcycle enthusiast, amateur solo traveler, mediocre musician. Let's talk about sharks.</p>
						<p>Software engineer with a strong JavaScript background and experience in a range of technologies from React and Angular to Node/Express and SQL/Mongo databases. 
						</p>
						<p>Software engineer with a strong JavaScript background and experience in a range of technologies from React and Angular to Node/Express and SQL/Mongo databases. 
						</p>
						<p>Software engineer with a strong JavaScript background and experience in a range of technologies from React and Angular to Node/Express and SQL/Mongo databases. 
						</p>
					</div>
				</div>
			)
		}
	}
}

export default About;