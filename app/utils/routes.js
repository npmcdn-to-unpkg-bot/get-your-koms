
import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

// Layouts
import App from '../components/App';
import Dashboard from '../components/Dashboard';

// Pages
import Home from '../components/Home';
import KOMs from '../components/KOMs';

// 404 Route
const NotFound = () => (
  <h1>404.. This page is not found!</h1>
);

export default (
  <Router history={browserHistory}>
    <Route component={App}>
      <Route path="/" component={Home} />

      <Route path="KOMs">
        <Route component={Dashboard}>
          <IndexRoute component={KOMs} />
        </Route>
      </Route>

      <Route path="*" component={NotFound} />

    </Route>
  </Router>
);
