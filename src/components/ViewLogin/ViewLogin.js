import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { fromEvent } from 'rxjs';

import GoogleAuth from '../GoogleAuth/GoogleAuth';
import { connect } from 'react-redux'
import { Logging } from '../../actions'

class ViewLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showValidation: false,
            isFormValid: false
        }
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
            this.props.dispatch(Logging());
		} else
		alert("ko");
    }
    
    render() {
        return (
            <div className="row no-gutters justify-content-center align-items-center">

                <div className="col-sm-5 px-2">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Connexion</h5>
                            <form className={"card-text" + (this.state.showValidation ? ' was-validated' : '') } 
                            ref={form => this.formEl = form} onSubmit={(e) => {e.preventDefault(); this.handleForm();}} id="form_login" noValidate>
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
                                <button type="submit" onClick={(e) => {e.preventDefault(); this.handleForm();}}
                                className={"btn" + (this.state.isFormValid === true ? ' btn-success' : ' disabled btn-secondary') }>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-sm-5 px-2">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Connectez-vous avec :</h5>
                            <div className="card-text row justify-content-center">
                                <GoogleAuth />
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}

ViewLogin.propTypes = {

};

const mapStateToProps = state => ({
    logged: state.auth.logged
});

export default connect(mapStateToProps)(ViewLogin);