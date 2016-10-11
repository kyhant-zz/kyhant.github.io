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
						<p><img className='about-portrait' src='../../style/images/kyhan_portrait.jpg' />
							Motorcycle enthusiast, amateur solo traveler, mediocre musician. Lets talk about sharks.</p>
						<p>Software engineer with a strong JavaScript background and experience in a range of technologies from React and Angular to Node/Express and SQL/Mongo databases. 
						</p>
						<p>Software engineer with a strong JavaScript background and experience in a range of technologies from React and Angular to Node/Express and SQL/Mongo databases. 
						</p>
						<p>I built this website from scratch with React.js. 
						</p>
					</div>
				</div>
			)
		}
	}
}

export default About;