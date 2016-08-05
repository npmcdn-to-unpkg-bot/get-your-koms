'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Strava = {
  // Request KOM data from Strava
  KOMs: function KOMs() {
    return _axios2.default.get('https://www.strava.com/api/v3/athletes/875993/koms', {
      params: {
        access_token: process.env.STRAVA
      }
    }).then(function (response) {
      return response;
    }).catch(function (error) {
      return error;
    });
  }
};

exports.default = Strava;
