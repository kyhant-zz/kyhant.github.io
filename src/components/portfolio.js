import React, { Component } from 'react';
import PortfolioItem from './portfolio_item';

class Portfolio extends Component {
	constructor(props){
		super(props)
		}

	render(){
			return (
				<div className='portfolio container animated fadeIn'>
					<PortfolioItem
						img='../../style/images/gitluv.jpg'
						title='GitLuv'
						description="Collaboration platform to match qualified developers with independent product owners."
						stack="React.js, Node.js, Express, MongoDB, and Mongoose."
						github='https://github.com/Git-Luv/GitLuv'
						url='http://www.gitluv.io/' />
					<PortfolioItem
						img='../../style/images/bpc.jpg'
						title='BPC'
						description="Re-implementation of a rock-paper-scissors app with chat, challenge and rematch features."
						stack="React.js, Socket.io, Node.js, Express and MongoDB."
						github='https://github.com/GoodNews-MKS-39/RockPaperScissors'
						url='http://bearprincesscowboy.com/' />
					<PortfolioItem
						img='../../style/images/flashback.jpg'
						title='Flashback'
						description="Search any date back to the 1860's, explore the top headlines of the day in the New York Times."
						stack="React.js, Bootstrap, New York Times API."
						github='https://github.com/kyhant/flashback' />
					</div>
			)
		}
	}

export default Portfolio;