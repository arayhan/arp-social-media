import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

class App extends Component {
	state = {
		hello: 'Hello World'
	}
	
	render() {
		let { hello } = this.state;
		return (
			<div className="App">
				<p> { hello } </p>
			</div>
		);
	}
}

export default App;