import React from 'react';
import logo from '../../logo.svg';
import './TmpHeader.css';
import FaBeer from 'react-icons/lib/fa/beer';
import AngelList from 'react-icons/lib/fa/angellist';
import Alert from 'react-icons/lib/io/alert';
import GoAlert from 'react-icons/lib/go/alert';
import Brightness from 'react-icons/lib/ti/adjust-brightness';

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

				<span className="input-group-text" id="basic-addon1" style={{ fontSize: '2em', maxWidth: '100px', display: 'initial' }}><FaBeer /><AngelList /><Alert /><GoAlert /><Brightness /></span>

        	</header>
		);
	}
}
