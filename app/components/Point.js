import React, { PropTypes } from 'react';
import { CircleMarker } from 'react-leaflet';

const divStyle = {
  stroke: false,
  fillColor: '#1E8BC3',
  fillOpacity: '0.8',
};

const Point = (props) => {
  return (
    <CircleMarker
      center={props.center}
      stroke={divStyle.stroke}
      fillColor={divStyle.fillColor}
      fillOpacity={divStyle.fillOpacity}
    />
  );
};

Point.propTypes = {
  center: PropTypes.array.isRequired,
};

export default Point;
