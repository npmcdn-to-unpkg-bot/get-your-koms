import axios from 'axios';

const Requests = {
  // Handle request for KOM data from client side
  apiKOMs() {
    return axios.get('/api/koms', {
      params: {
        id: 875993,
      },
    }).then((response) => {
      return { data: response.data };
    }).catch((error) => {
      return (error);
    });
  },
};

export default Requests;
