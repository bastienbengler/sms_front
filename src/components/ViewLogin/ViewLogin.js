import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fromEvent } from 'rxjs';

class ViewLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showValidation: false,
            isFormValid: false
        }
        this.handleForm = this.handleForm.bind(this);
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
			this.setState({
				isFormValid: this.formEl.checkValidity() === true ? true : false
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
        return (
            <div className="row justify-content-center">
                <form className={"col-md-6" + (this.state.showValidation ? ' was-validated' : '') } 
                ref={form => this.formEl = form} onSubmit={ this.handleForm } id="form_login" noValidate>
                    <div className="form-group pb-3">
                        <label >Adresse email</label>
                        <input type="email" className="form-control" id="login_email" placeholder="Enter email" required />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        <div className="invalid-feedback">
				        	Veuillez renseigner un email valide
				        </div>
                    </div>
                    <div className="form-group pb-3">
                        <label>Mot de passe</label>
                        <input type="password" pattern=".{5,10}" className="form-control" id="password_login" placeholder="Password" required />
                        <div className="invalid-feedback">
				        	Veuillez renseigner un password valide (5 caratères minimum)
				        </div>
                    </div>
                    <button type="button" onClick={ this.handleForm }
                     className={"btn" + (this.state.isFormValid === true ? ' btn-success' : ' disabled btn-secondary') }>Submit</button>
                </form>
            </div>
        );
    }
}

ViewLogin.propTypes = {

};

export default ViewLogin;