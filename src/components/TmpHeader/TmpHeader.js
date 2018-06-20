import React from 'react';
import logo from '../../logo.svg';
import './TmpHeader.css';

export default class TmpHeader extends React.Component {
	static propTypes = {
	};

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<header className="App-header">
		        <img src={logo} className="App-logo" id="logo" alt="logo" />
		        <h1 className="App-title">Welcome to React</h1>
        	</header>
		);
	}
}
