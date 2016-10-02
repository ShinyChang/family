import React, { Component } from 'react';
import { Provider } from 'react-redux';

import App from './App';
import DevTools from './DevTools';

export default class Root extends Component {
  render() {
    const { store, history } = this.props;
    return (
      <Provider store={store}>
        <div>
          <App history={history}/>
          <DevTools/>
        </div>
      </Provider>
    );
  }
}
