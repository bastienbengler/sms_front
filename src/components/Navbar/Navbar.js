import React from 'react';
import PropTypes from 'prop-types';
import './Navbar.css';
import { Link } from "react-router-dom";
import TextSms from 'react-icons/lib/io/android-textsms';
import FileExcel from 'react-icons/lib/fa/file-excel-o';
import Login from 'react-icons/lib/ti/user';

export default class Navbar extends React.PureComponent {
	static propTypes = {
		className: PropTypes.string
	};

	constructor(props) {
		super(props);
	}

	render() {
		return (
				<nav className={"navbar navbar-expand-lg sticky-top navbar-dark bg-primary " + this.props.className}>

						<a className="navbar-brand" href="">Navbar</a>
						<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
							<span className="navbar-toggler-icon"></span>
						</button>
						<div className="collapse navbar-collapse" id="navbarNav">
							<ul className="navbar-nav mr-auto">
								<li className="nav-item active">
									<Link className="nav-link" to="/">Home</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link" to="phone">
									{/* Phone */}
									<TextSms className="sizeIcon"/>
									</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link" to="filebrowser">
									{/* File Browser */}
									<FileExcel className="sizeIcon"/>
									</Link>
								</li>
							</ul>
							<ul className="navbar-nav">
								<li className="nav-item">
									<Link className="nav-link" to="/login"><Login className="sizeBigIcon" /></Link>
								</li>
							</ul>
						</div>
				</nav>
		);
	}
}
