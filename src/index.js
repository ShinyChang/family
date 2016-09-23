import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import App from './App';
import reducer from './reducers';
import './index.css';
import { fetchMedia } from './actions';

const store = createStore(reducer, applyMiddleware(thunk));
store.dispatch(fetchMedia());

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
