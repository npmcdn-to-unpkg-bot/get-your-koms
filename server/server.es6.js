const path = require('path');
const express = require('express');
const app = express();
const axios = require('axios');
const config = require('./config/config');

app.use(express.static(path.join(__dirname, 'public')));

// Intercept request to get params
app.param('id', (req, res, next, user) => {
  req.user = user;
});

// On request from the front end hit the Strava api
app.get('/api/athlete', (req, res) => {
  res.setHeader('Cache-Control', 'no-cache');

  axios.get('https://www.strava.com/api/v3/athletes/875993/koms', {
    params: {
      //id: req.user,
      access_token: config.strava,
    },
  })
  .then((response) => {
    res.json(response.data);
  })
  .catch((error) => {
    res.json(error);
  });
});

// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
app.get('*', (request, response) => {
  response.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.listen(3000, () => {
  console.log('Serving on Port 3000');
});
