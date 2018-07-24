import React from 'react';
import PropTypes from "prop-types";

import { ThemeContext } from '../../auth';

export default class FileBrowser extends React.Component {
	static propTypes = {
		fonction: PropTypes.func,
	};

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<ThemeContext.Consumer>
				{auth => 

				<div>{auth.token}</div>

			}
				
			</ThemeContext.Consumer>
		);
	}
}