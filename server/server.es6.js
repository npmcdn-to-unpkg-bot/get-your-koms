// Import packages
import path from 'path';
import express from 'express';

// Import env vars
import dotenv from 'dotenv';

// Handle dev vs production path
dotenv.config();

const app = express();

// Import Strava API Handling
import Strava from './strava';

// ==================
// ROUTE API REQUESTS
// ==================
// Intercept request to get params
let userID = null;
app.param('id', (req, res, next, user) => {
  userID = user;
});

// On request from the front end hit the Strava api
app.get('/api/koms', (req, res) => {
  res.setHeader('Cache-Control', 'no-cache');
  Strava.KOMs()
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
});

// ==================
// ROUTE SITE TRAFFIC
// ==================
// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
app.get('*', (request, response) => {
  response.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

// ==================
// START SERVER
// ==================
app.listen(3000, () => {
  console.log('Serving on Port 3000');
});
