import React, { PropTypes } from 'react';

const divStyle = {
  position: 'fixed',
  top: 0,
  right: 0,
  zIndex: 1,
  marginTop: '10px',
  marginRight: '10px',
};

const BtnGrp = () => {
  return (
    <div className="btn-group" role="group" aria-label="Strava Controls" style={divStyle}>
      <button type="button" className="btn btn-secondary">Left</button>
      <button type="button" className="btn btn-secondary">Middle</button>
      <button type="button" className="btn btn-secondary">Right</button>
    </div>
  );
};

export default BtnGrp;
