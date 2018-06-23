import React from 'react';
import './PhoneNumber.css';
import Iphone from 'react-icons/lib/io/iphone';
import { fromEvent } from 'rxjs';

export default class PhoneNumber extends React.Component {
	static propTypes = {
	};

	constructor(props) {
		super(props);
		this.state = {
			phone: "",
			showValidation: false,
			isFormValid: false
		};
	}
	componentDidMount() {

		fromEvent(this.formEl, 'click')
		.subscribe((e) => {
			this.setState({
				showValidation: true
			});
		});

		fromEvent(this.formEl, 'keyup')
		.subscribe((e) => {
			this.formEl.checkValidity() === true ? this.state.isFormValid = true : this.state.isFormValid = false;

			this.setState({
				'isFormValid': this.state.isFormValid
			});
		});
			
	}

	handleForm() {
		if (this.formEl.checkValidity()) {
			alert("ok");
		} else
			alert("ko");
	}

	render() {
		/*const props = [...this.props];

        let classNames = [];
        if (props.className) {
            classNames = [...props.className];
            delete props.className;
		}*/


		return (
			<form ref={form => this.formEl = form}
				className={'needs-validation row justify-content-center no-gutters form-inline mb-1 ' + (this.state.showValidation ? 'was-validated' : '' )} 
				id="form_phone_number" onSubmit={(e) => {e.preventDefault(); this.handleForm();}} noValidate>
					<div className="col-sm-4 col-12 row no-gutters justify-content-center input-group" style={{display: 'inherit'}}>
						<div className="input-group-prepend">
							<div className="input-group-text size-icon"><Iphone /></div>
						</div>
						<input type="text" className="col-sm-12 form-control input-text-centered" id="inlineFormInputGroupUsername2" placeholder="+33 ..."
						pattern="^(?:(?:\+|00)33[\s.-]{0,3}(?:\(0\)[\s.-]{0,3})?|0)[1-9](?:(?:[\s.-]?\d{2}){4}|\d{2}(?:[\s.-]?\d{3}){2})$" required/>
						<div className="invalid-feedback">
				        	Veuillez renseigner un numéro de téléphone français valide
				        </div>

					</div>
				    <button type="button" className={'col-12 col-sm-1 align-self-start btn adapt-to-icon ' + (this.state.isFormValid === true ? 'btn-success' : 'disabled btn-secondary' )}
				     onClick={(e) => {e.preventDefault(); this.handleForm();}}>Submit</button>
			</form>
		);
	}
}
