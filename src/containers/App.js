import React from 'react';
import { IndexRoute, Router, Route } from 'react-router';

import Main from '../pages/Main';
import Home from '../pages/Home';
import Login from '../pages/Login';

const App = ({ history }) => {
  return (
    <Router history={history}>
      <Route path="/" component={Main}>
        <IndexRoute component={Home} />
        <Route path="login" component={Login}/>
      </Route>
    </Router>
  );
}

export default App;
