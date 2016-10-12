import React, { Component } from 'react';

class About extends Component {
	constructor(props){
		super(props)
	}
	render(){
		if(this.props.selected === 'about'){
			return (
				<div className="container about animated fadeIn">
					<div className="about-text">
						<p><img className='about-portrait' src='../../style/images/kyhan_portrait.png' />
						</p>
						<p>
							Software engineer with experience in front and back end development using a variety of acronyms to get the job done. I believe in user-centered design and finding the most efficient and scalable means of getting there.
						</p>
						<p>
							There's no substitute for intellectual curiosity, and in this profession it's mandatory. I'm always looking to grow my understanding of technologies I've used and exploring those I haven't.
						</p>
						<p>
							Motorcycle enthusiast, amateur solo traveler, mediocre musician. Lets talk about sharks.
						</p>
						<p>This site was built by me for you with React.js. 
						</p>
						<hr />
							<p>What I'm reading:</p>
						<div className='reading'>
							<p className="col-md-5"><a target="blank" href="http://www.goodreads.com/book/show/12067.Good_Omens">Good Omens</a> by Neil Gaiman and Terry Pratchett</p>
							<p className="col-md-5"><a target="blank" href="http://www.goodreads.com/book/show/16158542-the-boys-in-the-boat?from_search=true">The Boys in the Boat</a> by Daniel James Brown</p>
							<p className="col-md-5"><a target="blank" href="http://www.goodreads.com/book/show/41811.The_Caves_of_Steel?from_search=true">The Caves of Steel</a> by Isaac Asimov</p>
							<p className="col-md-5"><a target="blank" href="http://www.goodreads.com/book/show/2998152-javascript?from_search=true">JavaScript: The Good Parts</a> by Douglas Crockford</p>
						</div>
						<p>...and anything <a target="blank" href="https://hackernoon.com/how-it-feels-to-learn-javascript-in-2016-d3a717dd577f#.vgld4659x">this guy writes</a></p>
					</div>
				</div>
			)
		}
	}
}

export default About;