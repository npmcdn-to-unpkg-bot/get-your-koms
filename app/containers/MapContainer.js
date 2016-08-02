import React from 'react';
import Basemap from '../components/Basemap';

class MapContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      center: [40, -76],
      zoom: 12,
      coordinates: [{ id: 1, latLon: [40, -76.1] }, { id: 2, latLon: [40, -76.2] }, { id: 3, latLon: [40, -76.3] }],
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ coordinates: [{ id: 1, latLon: [40.1, -76.1] }, { id: 2, latLon: [40.1, -76.2] }, { id: 3, latLon: [40.1, -76.3] }] });
    }, 4000);
  }
  render() {
    return (
      <Basemap
        divId={'map'}
        center={this.state.center}
        zoom={this.state.zoom}
        url={'http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png'}
        attribution={'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="https://cartodb.com/attributions">CartoDB</a>'}
        coordinates={this.state.coordinates}
      />
    );
  }
}

export default MapContainer;
