var React = require('react');
var styles = require('../styles');

function Welcome(props) {
  return (
    <div className="jumbotron col-sm-12 text-center" style={styles.transparentBg}>
      {props.children}
    </div>
  );
}

module.exports = Welcome;
