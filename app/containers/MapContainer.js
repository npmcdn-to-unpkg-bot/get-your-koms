import React from 'react';
import Basemap from '../components/Basemap';

import API from '../utils/api';

class MapContainer extends React.Component {
  constructor() {
    super();
    this.handleKomClick = this.handleKomClick.bind(this);
    this.state = {
      center: [40, -76],
      zoom: 12,
      coordinates: [],
    };
  }

  componentDidMount() {

  }
  handleKomClick() {
    this.setState(API.getKOMs());
  }
  render() {
    return (
      <Basemap
        queryAPI={this.handleKomClick}
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
