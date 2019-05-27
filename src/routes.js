import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import App from './App';
import Train from './components/Train';

const createRoutes = () => (
  <Router>
    <App>
      <Switch>
        <Redirect exact from="/" to="/train" />
        <Route exact path="/train" component={Train} />
        {/* <Route exact path="/search" component={Search} /> */}
      </Switch>
    </App>
  </Router>
);

export default createRoutes;
