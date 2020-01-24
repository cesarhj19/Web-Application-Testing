import React, { Component } from 'react';
import './App.css';
import Display from './components/display';
import Dashboard from './components/dashboard';

class App extends Component {
	state = {
		count: {
			balls: 0,
			strikes: 0
		}
	};

	reset = () => {
		this.setState({ count: { balls: 0, strikes: 0 } });
	};

	handleStrike = () => {
		let count = { ...this.state.count };
		count.strikes += 1;
		this.setState({ count });
		if (count.strikes > 2) {
			this.reset();
			alert('3 Strikes, Batter Out!');
		}
	};

	handleBall = () => {
		let count = { ...this.state.count };
		count.balls += 1;
		this.setState({ count });
		if (count.balls > 3) {
			this.reset();
			alert('4 Balls, Batter Walks!');
		}
	};

	handleFoul = () => {
		let count = { ...this.state.count };
		alert('Foul Ball!');
		if (count.strikes !== 2) {
			count.strikes += 1;
			this.setState({ count });
		}
	};

	handleHit = () => {
		alert('Hit!!!!');
		this.reset();
	};

	render() {
		const { count } = this.state;
		return (
			<div className='App'>
				<Display count={count} />
				<Dashboard
					count={count}
					onFoul={this.handleFoul}
					onBall={this.handleBall}
					onStrike={this.handleStrike}
					onHit={this.handleHit}
				/>
			</div>
		);
	}
}

export default App;
