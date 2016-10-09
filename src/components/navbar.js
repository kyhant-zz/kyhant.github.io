import React, { Component } from 'react';

class NavBar extends Component {
	constructor(props){
		super(props);
	}
	render(){
		return(
			<nav className="navbar navbar-inverse navbar-fixed-top">
	     	<div className="container">
	      	<div className="navbar-header">
	          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
	            <span className="sr-only">Toggle navigation</span>
	            <span className="icon-bar"></span>
	            <span className="icon-bar"></span>
	            <span className="icon-bar"></span>
	          </button>
	          <a className="navbar-brand" href="#">Kyhan Turner</a>
	        </div>
	        <div id="navbar" className="navbar-collapse collapse">
	          <form className="navbar-form navbar-right">
	            <div className="form-group">
	              <input type="text" placeholder="Email" className="form-control"></input>
	            </div>

	            <div className="form-group">
	              <input type="password" placeholder="Password" className="form-control"></input>
	            </div>
	            <button type="submit" className="btn btn-success">Sign in</button>
	          </form>
	        </div>
	      </div>
    	</nav>
			)
	}

}

export default NavBar