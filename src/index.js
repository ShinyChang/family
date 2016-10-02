import React from 'react';
import { render } from 'react-dom';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import './index.css';
import Root from './containers/Root';

// store / reducer
import configureStore from './store/configureStore';
import { fetchMedia } from './actions';
const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);
store.dispatch(fetchMedia()); // debug code

render(<Root store={store} history={history} />, document.getElementById('root'));
