import React, { PropTypes } from 'react';

const divStyle = {
  position: 'fixed',
  top: 0,
  right: 0,
  zIndex: 1,
  marginTop: '10px',
  marginRight: '10px',
};

const BtnGrp = (props) => {
  return (
    <div className="btn-group" role="group" aria-label="Strava Controls" style={divStyle}>
      <button type="button" className="btn btn-secondary" onClick={props.getData}>KOMs</button>
      <button type="button" className="btn btn-secondary">Races</button>
      <button type="button" className="btn btn-secondary">Longest</button>
    </div>
  );
};

BtnGrp.propTypes = {
  getData: PropTypes.func.isRequired,
};

export default BtnGrp;
