import React, { Component } from 'react';

class PortfolioItem extends Component {
	constructor(props) {
		super(props);
	}
	render(){
		return (
			  <div className="col-sm-6 col-md-4">
			    <div className="thumbnail">
			      <img className="portfolio-img" src={this.props.img} alt="..."></img>
			      <div className="caption">
			        <h3>{this.props.title}</h3>
			        <p>{this.props.description}</p>
			        <p><a href={this.props.github} className="btn btn-primary" target="blank" role="button">GitHub</a> <a href={this.props.url} className="btn btn-default" target="blank" role="button">Website</a></p>
			      </div>
			    </div>
			</div>
		)	
	}
}

export default PortfolioItem