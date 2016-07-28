const React = require('react');
const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const IndexRoute = ReactRouter.IndexRoute;
const hashHistory = ReactRouter.hashHistory;
const App = require('../components/App');
const Home = require('../components/Home');
const PgOneContainer = require('../containers/PgOneContainer');

const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="pgOne" header="Page One" component={PgOneContainer} />
    </Route>
  </Router>
);

module.exports = routes;
