const React = require('react');
const PropTypes = React.PropTypes;
const transparentBg = require('../styles').transparentBg;

function KOMs(props) {
  return (
    <div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={transparentBg}>
      <h1>{props.header}</h1>
    </div>
  );
}

KOMs.propTypes = {
  header: PropTypes.string.isRequired,
};

module.exports = KOMs;
