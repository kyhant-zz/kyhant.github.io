import React, { Component } from 'react';
import NavBar from './navbar';
import Jumbo from './jumbo';
import Portfolio from './portfolio';
import About from './about';

export default class App extends Component {
	constructor(props){
		super(props)

		this.state={
			selected:''
		}
	}

	handleChangePortfolio(e){
		this.setState({selected:'portfolio'})
		console.log('in handle change portfolio')
	}
	
	handleChangeAbout(e){
		this.setState({selected:'about'})
		console.log('in handle change')
	}

  render() {
  	if(this.state.selected === '') {
	    return (
	    	<div className='background'>
		      	<Jumbo />
	      		<div className="center">
							<button className="btn btn-primary btn-lg center" onClick={this.handleChangeAbout.bind(this)} role="button">About</button>
							<button className="btn btn-primary btn-lg center" onClick={this.handleChangePortfolio.bind(this)}>Portfolio</button>
	  				</div>
	  		</div>
	    )
  	}
  	else if(this.state.selected === 'portfolio') {
  		return (
	    	<div className='background'>
	      	<Jumbo />
      		<div className="center">
						<button className="btn btn-primary btn-lg center" onClick={this.handleChangeAbout.bind(this)} role="button">About</button>
						<button className="btn btn-primary btn-lg center" onClick={this.handleChangePortfolio.bind(this)}>Portfolio</button>
	    		</div>
	      	<Portfolio className='portfolio' selected={this.state.selected} />
	  		</div>
  		)
  	} else if(this.state.selected === 'about') {
  		return (
	    	<div className='background'>
	      	<Jumbo />
      		<div className="center">
						<button className="btn btn-primary btn-lg center" onClick={this.handleChangeAbout.bind(this)} role="button">About</button>
						<button className="btn btn-primary btn-lg center" onClick={this.handleChangePortfolio.bind(this)}>Portfolio</button>
	  			</div>
  				<About selected={this.state.selected}/>
	  		</div>
  		)
  	}
  }
}
