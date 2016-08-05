'use strict';

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

var _strava = require('./strava');

var _strava2 = _interopRequireDefault(_strava);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Handle dev vs production path
_dotenv2.default.config();

// Import env vars
// Import packages


var app = (0, _express2.default)();

// Import Strava API Handling


// ==================
// ROUTE API REQUESTS
// ==================
// Intercept request to get params
var userID = null;
app.param('id', function (req, res, next, user) {
  userID = user;
});

// On request from the front end hit the Strava api
app.get('/api/koms', function (req, res) {
  res.setHeader('Cache-Control', 'no-cache');
  _strava2.default.KOMs().then(function (response) {
    res.json(response.data);
  }).catch(function (error) {
    console.log(error);
  });
});

// ==================
// ROUTE SITE TRAFFIC
// ==================
// Serve static files
app.use(_express2.default.static(_path2.default.join(__dirname, 'public')));

// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
app.get('*', function (request, response) {
  response.sendFile(_path2.default.resolve(__dirname, 'public', 'index.html'));
});

// ==================
// START SERVER
// ==================
app.listen(3000, function () {
  console.log('Serving on Port 3000');
});
