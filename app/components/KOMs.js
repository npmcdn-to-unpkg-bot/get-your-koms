import React from 'react';
import ReactDOM from 'react-dom';
import L from 'leaflet';

// Get Window Height and Calculate Map Div Height accordingly
function listenWindowResize() {
  window.addEventListener('resize', () => {
    const mapDiv = document.getElementById('map');
    mapDiv.style.height = (window.innerHeight - 80) + 'px';
  });
}

const divStyle = {
  // window height minus dashboard
  height: (window.innerHeight - 80) + 'px',
  backgroundColor: '#111',
};

class KOMs extends React.Component {
  componentDidMount() {
    // Load leaflet
    this.leafletBase();
    // Execute on Resize
    listenWindowResize();
    this.testUpdate();
  }
  leafletBase() {
    const map = this.map = L.map(ReactDOM.findDOMNode(this), {
      minZoom: 2,
      maxZoom: 20,
      layers: [
        L.tileLayer(
          'http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png',
          { attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="https://cartodb.com/attributions">CartoDB</a>' }
      )],
    });
    map.setView([40, -76.5], 13);
  }
  testUpdate() {
    setTimeout(() => {
      console.log('ok');
      this.setState(this.map.setView([40, -75], 12));
    }, 5000);
  }
  render() {
    return (
      <div id="map" ref="mapAnchor" style={divStyle} />
    );
  }
}

export default KOMs;
