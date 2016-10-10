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
	    	<div>
		      	<Jumbo />
	      		<div className="center">
							<a href='#bottom'><button className="btn btn-primary btn-lg center" onClick={this.handleChangeAbout.bind(this)} role="button">About</button></a>
							<a href='#bottom'><button className="btn btn-primary btn-lg center" onClick={this.handleChangePortfolio.bind(this)}>Portfolio</button></a>
	  				</div>
	  			<div id="bottom" />
	  		</div>
	    )
  	}
  	else if(this.state.selected === 'portfolio') {
  		return (
	    	<div className='selected'>
	      	<Jumbo />
      		<div className="center">
						<a href='#bottom'><button className="btn btn-primary btn-lg center" onClick={this.handleChangeAbout.bind(this)} role="button">About</button></a>
						<a href='#bottom'><button className="btn btn-primary btn-lg center" onClick={this.handleChangePortfolio.bind(this)}>Portfolio</button></a>
	    		</div>
	      	<Portfolio className='portfolio' selected={this.state.selected} />
  				<div id="bottom" />
	  		</div>
  		)
  	} else if(this.state.selected === 'about') {
  		return (
	    	<div className='selected'>
	      	<Jumbo />
      		<div className="center">
						<a href='#bottom'><button className="btn btn-primary btn-lg center" onClick={this.handleChangeAbout.bind(this)} role="button">About</button></a>
						<a href='#bottom'><button className="btn btn-primary btn-lg center" onClick={this.handleChangePortfolio.bind(this)}>Portfolio</button></a>
	  			</div>
  				<About selected={this.state.selected}/>
  			  <div id="bottom" />	
	  		</div>
  		)
  	}
  }
}
