import React, { PropTypes } from 'react';
import { Map, TileLayer } from 'react-leaflet';

const divStyle = {
  // window height minus dashboard
  height: (window.innerHeight - 80) + 'px',
  backgroundColor: '#111',
};

function listenWindowResize(mapId) {
  window.addEventListener('resize', () => {
    const mapDiv = document.getElementById(mapId);
    mapDiv.style.height = (window.innerHeight - 80) + 'px';
  });
}

const Basemap = (props) => {
  listenWindowResize(props.divId);
  return (
    <Map id={props.divId} center={props.center} zoom={props.zoom} style={divStyle}>
      <TileLayer attribution={props.attribution} url={props.url} />
    </Map>
  );
};

Basemap.propTypes = {
  divId: PropTypes.string.isRequired,
  center: PropTypes.array.isRequired,
  zoom: PropTypes.number.isRequired,
  attribution: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Basemap;
