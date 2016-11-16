import React, { Component } from 'react';

class PortfolioItem extends Component {
	constructor(props) {
		super(props);
	}
	render(){
		return (
		 <div className="col-sm-12 col-md-4">
	    <div className="thumbnail">
	      <img className="portfolio-img" src={this.props.img} alt="..."></img>
	      <div className="caption">
	        <h3>{this.props.title}</h3>
	        <p>{this.props.description}</p>
	        <p><strong>Developed with: </strong>{this.props.stack}</p>
	        <p className='links'><a href={this.props.github} className="btn btn-default" target="blank" role="button"><i className="fa fa-lg fa-github"></i></a><a href={this.props.url} className="btn btn-primary" disabled={this.props.disabled} target="blank" role="button"><i className="fa fa-globe fa-lg"></i></a></p>
	      </div>
	    </div>
		</div>
	)}
}

export default PortfolioItem