'use strict';

var path = require('path');
var express = require('express');
var app = express();
var axios = require('axios');
var config = require('./config/config');

app.use(express.static(path.join(__dirname, 'public')));

// Intercept request to get params
app.param('id', function (req, res, next, user) {
  req.user = user;
});

// On request from the front end hit the Strava api
app.get('/api/athlete', function (req, res) {
  res.setHeader('Cache-Control', 'no-cache');

  axios.get('https://www.strava.com/api/v3/athletes/875993/koms', {
    params: {
      //id: req.user,
      access_token: config.strava
    }
  }).then(function (response) {
    res.json(response.data);
  }).catch(function (error) {
    res.json(error);
  });
});

// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
app.get('*', function (request, response) {
  response.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.listen(3000, function () {
  console.log('Serving on Port 3000');
});
