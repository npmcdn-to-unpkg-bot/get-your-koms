var React = require('react');
require('../main.css');

const App = React.createClass({
  render() {
    return (
      <div className='main-container'>
        {React.cloneElement(this.props.children, {key: this.props.location.pathname})}
      </div>
    );
  }
});

module.exports = App;
