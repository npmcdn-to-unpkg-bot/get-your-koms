import axios from 'axios';

const Requests = {
  getKOMs() {
    return axios.get('/api/athlete', {
      params: {
        id: 875993,
      },
    }).then((response) => {
      return { data: response.data };
    });
  },
};

export default Requests;
