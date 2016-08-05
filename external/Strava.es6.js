import axios from 'axios';

const Strava = {
  // Request KOM data from Strava
  KOMs() {
    return axios.get('https://www.strava.com/api/v3/athletes/875993/koms', {
      params: {
        access_token: process.env.STRAVA,
      },
    }).then((response) => {
      return (response);
    }).catch((error) => {
      return (error);
    });
  },
};

export default Strava;
