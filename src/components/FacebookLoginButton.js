import React, { Component, PropTypes } from 'react';
import FacebookLogin from 'react-facebook-login';

class FacebookLoginButton extends Component {
  responseFacebook = (response) => {
    // status: "not_authorized"
    // {accessToken, email, expiresIn, id, name, picture: {data: {is_silhouette, url}}, signedRequest, userID
    if (response.status === 'not_authorized') {
      return;
    }
    if (response.userID) {
      this.props.login(response.accessToken);
    }
  };

  render() {
    return (
      <FacebookLogin {...this.props} callback={this.responseFacebook}/>
    )
  }
}

FacebookLoginButton.defaultProps = {
  autoLoad: true,
  fields: 'name,email,picture',
};

FacebookLoginButton.propTypes = {
  appId: PropTypes.string.isRequired,
  fields: PropTypes.string,
  autoLoad: PropTypes.bool,
  login: PropTypes.func.isRequired
};

export default FacebookLoginButton;
