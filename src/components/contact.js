import React, { Component } from 'react';

class Contact extends Component {
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div className="contact container-fluid navbar-fixed-top">
        <div className="row">
	        <div className="col-md-3 .col-xs-3"><i className="fa fa-mobile fa-lg" aria-hidden="true"></i>: 916.600.4272</div>
	        <div className="col-md-3 .col-xs-3"><i className="fa fa-envelope-o" aria-hidden="true"></i>: kyhanpt@gmail.com</div>
	        <div className="col-md-3 .col-xs-3"><a href="https://github.com/kyhant" target="blank"><i className="fa fa-github fa-lg" aria-hidden="true"></i>: github.com/kyhant</a></div>
	        <div className="col-md-3 .col-xs-3"><a href="https://www.linkedin.com/in/kyhan" target="blank"><i className="fa fa-linkedin-square fa-lg" aria-hidden="true"></i>: linkedin.com/in/kyhan</a></div>
        </div>
    	</div>
		)
	}
}

export default Contact;