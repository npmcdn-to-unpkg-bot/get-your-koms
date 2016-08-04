
import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

// Layouts
import App from '../components/App';
import Dashboard from '../components/Dashboard';

// Pages
import Home from '../components/Home';
import Basemap from '../containers/MapContainer';

// 404 Route
const NotFound = () => (
  <h1>404.. This page is not found!</h1>
);

export default (
  <Router history={browserHistory}>
    <Route component={App}>
      <Route path="/" component={Home} />

      <Route path="Map" component={Basemap} />


      <Route path="*" component={NotFound} />

    </Route>
  </Router>
);
