import React from 'react';
import { GoogleLogin } from 'react-google-login-component';

export default class Login extends React.Component{

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
                     className="google-login"
                     scope="profile"
                     prompt="select_account"
                     fetchBasicProfile={false}
                     responseHandler={this.responseGoogle}
                     buttonText="Login With Google"/>
      </div>
    );
  }
}
