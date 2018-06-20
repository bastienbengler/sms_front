import React from 'react';
import PropTypes from "prop-types";

export default class FileBrowser extends React.Component {
	static propTypes = {
		fonction: PropTypes.func,
	};

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<label className="btn btn-default" onClick={this.props.fonction}>
            Browse {this.props.test} <input type="file"/>
        	</label>
		);
	}
}