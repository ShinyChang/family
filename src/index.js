import React from 'react';
import { render } from 'react-dom';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import './index.css';
import API from './api';
import Root from './containers/Root';

// store / reducer
import configureStore from './store/configureStore';
import { fetchMedia } from './actions';
const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);
const token = localStorage.getItem('token');

if (token) {
  API.setToken(token);
  API.get('users/me').then(data => {
      store.dispatch({type: 'AUTH_SUCCESS', user: data});
      store.dispatch(fetchMedia()); // debug code
      render(<Root store={store} history={history} />, document.getElementById('root'));
  }).catch((err) => {
    render(<Root store={store} history={history} />, document.getElementById('root'));
  });
} else {
  render(<Root store={store} history={history} />, document.getElementById('root'));
}



