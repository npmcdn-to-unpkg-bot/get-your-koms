import React, { PropTypes } from 'react';
import Basemap from '../components/Basemap';

class MapContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      center: [40, -75],
      zoom: 12,
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ center: [40, -76] });
    }, 2000);
  }
  render() {
    return (
      <Basemap
        divId={'map'}
        center={this.state.center}
        zoom={this.state.zoom}
        url={'http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png'}
        attribution={'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="https://cartodb.com/attributions">CartoDB</a>'}
      />
    );
  }
}

export default MapContainer;
