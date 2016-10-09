import React, { Component } from 'react';
import NavBar from './navbar';
import Jumbo from './jumbo';
import Portfolio from './portfolio'

export default class App extends Component {
  render() {
    return (
    	<div className='background'>
	      	<NavBar />
	      	<Jumbo />
	      	<Portfolio />
  		</div>
    )
  }
}
