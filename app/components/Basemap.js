import React, { PropTypes } from 'react';
import { Map, TileLayer } from 'react-leaflet';

import Point from './Point';
import BtnGrp from './BtnGrp';

const divStyle = {
  // window height minus dashboard
  height: `${window.innerHeight}px`,
  backgroundColor: '#111',
};

// Resize map height on window resize
function listenWindowResize(mapId) {
  window.addEventListener('resize', () => {
    const mapDiv = document.getElementById(mapId);
    mapDiv.style.height = `${window.innerHeight}px`;
  });
}

// Itterate over array of supplied lat/lon
// and render each point
const PointList = (props) => {
  const CoordsArray = props.points.map((item) => {
    return (<Point key={item.id} center={item.latLon} />);
  });
  return <div>{CoordsArray}</div>;
};

PointList.propTypes = {
  points: PropTypes.array.isRequired,
};

const Basemap = (props) => {
  listenWindowResize(props.divId);
  return (
    <div>
      <BtnGrp />
      <Map id={props.divId} center={props.center} zoom={props.zoom} style={divStyle}>
        <TileLayer attribution={props.attribution} url={props.url} />
        <PointList points={props.coordinates} />
      </Map>
    </div>
  );
};

Basemap.propTypes = {
  divId: PropTypes.string.isRequired,
  center: PropTypes.array.isRequired,
  zoom: PropTypes.number.isRequired,
  attribution: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  coordinates: PropTypes.array.isRequired,
};

export default Basemap;
