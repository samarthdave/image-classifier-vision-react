import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import App from './App';
import Train from './components/Train';
import Predict from './components/Predict';

const createRoutes = () => (
  <Router>
    <App>
      <Switch>
        <Redirect exact from="/" to="/train" />
        <Route path="/train" component={Train} />
        <Route path="/predict" component={Predict} />
      </Switch>
    </App>
  </Router>
);

export default createRoutes;
