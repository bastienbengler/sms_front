import React from 'react';
import './GoogleAuth.css';
import { GoogleLogin } from 'react-google-login-component';
import Google from 'react-icons/lib/io/social-google-outline';
import { Router, Route } from "react-router-dom";

export default class GoogleAuth extends React.Component{

  constructor (props, context) {
    super(props, context);
  }

  responseGoogle (googleUser) {
    var id_token = googleUser.getAuthResponse().id_token;
    var googleId = googleUser.getId();
    
    console.log({ googleId });
    console.log({accessToken: id_token});
    //anything else you want to do(save to localStorage)...
  }

  render () {
    return (
      <div>
        <GoogleLogin socialId="1002721826106-56vr1mevet477d1u1ud8mvc714cj8s9i.apps.googleusercontent.com"
                     className="btn btn-primary"
                     scope="profile"
                     prompt="select_account"
                     fetchBasicProfile={false}
                     responseHandler={this.responseGoogle}
                     buttonText=""
                     >
          <Google className="google-size-icon"/>
        </GoogleLogin>
      </div>
    );
  }
}
