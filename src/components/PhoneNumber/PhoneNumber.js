import React from 'react';

export default class PhoneNumber extends React.Component {
	static propTypes = {
	};

	constructor(props) {
		super(props);
		this.state = {
			phone: ""
		};
	}

	render() {
		return (
			<div>
				phone here
			</div>
		);
	}
}
