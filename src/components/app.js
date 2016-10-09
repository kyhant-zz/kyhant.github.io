import React, { Component } from 'react';
import NavBar from './navbar';
import Jumbo from './jumbo';

export default class App extends Component {
  render() {
    return (
      <div>
      	<NavBar />
      	<Jumbo />
      </div>
    )
  }
}
