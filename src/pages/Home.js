import React, { Component } from 'react';
import { Link } from 'react-router';

import logo from '../logo.svg';
import VisibleMediaList from '../containers/VisibleMediaList';
import MediaLoading from '../containers/MediaLoading';
import MediaUploader from '../containers/MediaUploader';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <Link to='/login'>Login</Link>
        </p>
        <MediaUploader/>
        <VisibleMediaList/>
        <MediaLoading/>
      </div>
    );
  }
}

export default Home;
