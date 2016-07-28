var React = require('react');
require('../main.css');
import Dashboard from '../components/Dashboard';

const App = React.createClass({
  render() {
    return (
      <div>
        <Dashboard />
        {React.cloneElement(this.props.children, {key: this.props.location.pathname})}
      </div>
    );
  },
});

module.exports = App;
