import React from 'react';
import Iphone from 'react-icons/lib/io/iphone';
/*import { Observable, from, fromEvent } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';
import $ from 'jquery'; 
*/
export default class PhoneNumber extends React.Component {
	static propTypes = {
	};

	constructor(props) {
		super(props);
		this.state = {
			phone: ""
		};
	}
	componentDidMount() {
		/*fromEvent($( "#form_phone_number" ), 'keydown')
		.subscribe((e) => console.log(e));*/
	}

	render() {
		return (
			<div>
				<form className="form-inline was-validated" id="form_phone_number" onSubmit={(e) => {e.preventDefault(); console.log("stop");}} noValidate>
				<label className="sr-only" htmlFor="inlineFormInputGroupUsername2">Username</label>
					<div className="input-group mb-2 mr-sm-2">
						<div className="input-group-prepend">
							<div className="input-group-text" style={{fontSize: '2em'}}><Iphone /></div>
						</div>
						<input type="text" className="form-control" id="inlineFormInputGroupUsername2" placeholder="+33 ..."
						pattern="^(?:(?:\+|00)33[\s.-]{0,3}(?:\(0\)[\s.-]{0,3})?|0)[1-9](?:(?:[\s.-]?\d{2}){4}|\d{2}(?:[\s.-]?\d{3}){2})$" required/>
						<div className="invalid-feedback">
				        	Veuillez renseigner un numéro de téléphone valide
				        </div>
					</div>

				  <button type="button" className="btn btn-primary mb-2" onClick={(e) => {e.preventDefault(); console.log("stop");}}>Submit</button>
				</form>
			</div>
		);
	}
}
