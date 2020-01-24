import React, { Component } from 'react';

class Display extends Component {
	render() {
		const { balls, strikes } = this.props.count;
		return (
			<div className='display-container'>
				<h2 className='balls'>Balls: {balls}</h2>
				<h2 className='strikes'>Strikes: {strikes}</h2>
			</div>
		);
	}
}

export default Display;
