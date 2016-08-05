import React from 'react';
import Basemap from '../components/Basemap';

import Requests from '../utils/requests';

function mapKOMs(arr) {
  const komCoords = [];
  arr.map((kom) => {
    const komObj = {
      id: kom.id,
      latLon: kom.segment.start_latlng,
    };
    komCoords.push(komObj);
  });
  return komCoords;
}

class MapContainer extends React.Component {
  constructor() {
    super();
    this.handleKomClick = this.handleKomClick.bind(this);
    this.state = {
      center: [40.157, -76.307],
      zoom: 13,
      coordinates: [],
    };
  }
  handleKomClick() {
    Requests.apiKOMs()
      .then((data) => {
        this.setState({ coordinates: mapKOMs(data.data) });
      })
      .catch((error) => {
        console.log(error);
      });
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
