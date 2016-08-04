// Page logic would go here
/*
getInitialState() {
  return {
    data: [],
  };
},
componentWillMount() {
  this.getAthlete();
},
getAthlete() {
  axios.get('/api/athlete', { // eslint-disable-line no-undef
    params: {
      id: 875993,
    },
  }).then((response) => {
    this.setState({ data: response.data });
    console.log(this.state.data);
  });
},
*/
import axios from 'axios';

const API = {
  getKOMs() {
    console.log('hi');
    return { coordinates: [{ id: 1, latLon: [40.1, -76.1] }, { id: 2, latLon: [40.1, -76.2] }, { id: 3, latLon: [40.1, -76.3] }] }
  },
};
/*
const getKOMs = () => {
  /*
  axios.get('/api/athlete', { // eslint-disable-line no-undef
    params: {
      id: 875993,
    },
  }).then((response) => {
    //this.setState({ data: response.data });
    console.log(response.data);
  });

  console.log('hi');
}
*/

export default API;
