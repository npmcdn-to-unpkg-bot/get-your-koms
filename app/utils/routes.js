import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from '../components/App';
import Home from '../components/Home';
import KomContainer from '../containers/KomContainer';

// 404 Route
const NotFound = () => (
  <h1>404.. This page is not found!</h1>
);

const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="KOMs" header="KOM Map!" component={KomContainer} />
    </Route>
    <Route path="*" component={NotFound} />
  </Router>
);

module.exports = routes;
