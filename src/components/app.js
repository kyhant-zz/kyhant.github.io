import React, { Component } from 'react';
import Contact from './contact';
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
	}
	
	handleChangeAbout(e){
		this.setState({selected:'about'})
	}

  render() {
  	if(this.state.selected === '') {
	    return (
	    	<div>
	    			<Contact />
		      	<Jumbo description="Short stack pancake lover, full-stack software engineer" />
	      		<div className="center">
							<button className="btn btn-primary btn-lg center" onClick={this.handleChangeAbout.bind(this)} role="button">About</button>
							<button className="btn btn-primary btn-lg center" onClick={this.handleChangePortfolio.bind(this)}>Portfolio</button>
	  				</div>
	  			<div id="bottom" />
	  		</div>
	    )
  	}
  	else if(this.state.selected === 'portfolio') {
  		return (
	    	<div className='selected'>
	    		<Contact />
	      	<Jumbo />
      		<div className="center">
						<button className="btn btn-primary btn-lg center" onClick={this.handleChangeAbout.bind(this)} role="button">About</button>
	    		</div>
	      	<Portfolio className='portfolio' selected={this.state.selected} />
  				<div id="bottom" />
	  		</div>
  		)
  	} else if(this.state.selected === 'about') {
  		return (
	    	<div className='selected'>
		    	<Contact />      	
	      	<Jumbo />
      		<div className="center">
						<button className="btn btn-primary btn-lg center" onClick={this.handleChangePortfolio.bind(this)}>Portfolio</button>
	  			</div>
  				<About selected={this.state.selected}/>
  			  <div id="bottom" />	
	  		</div>
  		)
  	}
  }
}
