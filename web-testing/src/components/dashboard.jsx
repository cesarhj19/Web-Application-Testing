import React, { Component } from 'react';

class Dashboard extends Component {
	render() {
		const { onStrike, onBall, onFoul, onHit } = this.props;
		return (
			<div className='dashboard'>
				<button onClick={onStrike}>Strike</button>
				<button onClick={onBall}>Ball</button>
				<button onClick={onFoul}>Foul</button>
				<button onClick={onHit}>Hit</button>
			</div>
		);
	}
}

export default Dashboard;
