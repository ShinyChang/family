import React, { Component } from 'react';
import config from '../config';
import LoginButton from '../containers/LoginButton';

class Login extends Component {
  render() {
    return (
      <div className="Login">
        <p>Hello Login</p>
        <LoginButton appId={config.facebook_app_id}/>
      </div>
    );
  }
}

export default Login;
