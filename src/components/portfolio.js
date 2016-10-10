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
						img='../../images/gitluv.jpg'
						title='GitLuv'
						description='This was a project that did stuff'
						github='https://github.com/Git-Luv/GitLuv'
						url='http://www.gitluv.io/' />
					<PortfolioItem
						img='../../images/bpc.jpg'
						title='BPC'
						description='This was a project that did things'
						github='https://github.com/GoodNews-MKS-39/RockPaperScissors'
						url='http://bearprincesscowboy.com/' />
					<PortfolioItem
						img='../../images/flashback.jpg'
						title='Flashback'
						description='this is what flashback did'
						github='https://github.com/kyhant/flashback' />
					</div>
			)
		}
	}

export default Portfolio;