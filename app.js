require('dotenv').config();
const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

// dbConnection
require('./dbConnection/mongo');

// Body Parser
// const bodyPaser = require('body-parser')

app.use(express.json());
// app.use(bodyPaser.raw())
app.use(express.urlencoded({
  extended: false
}));

// Cookie Parser


// Disables CORS
app.use((req, res, next) => {
  // res.header("Access-Control-Allow-Origin", process.env.CROSS_ORIGIN);
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Import the routes

app.get('/', (req, res) => {
  res.send('Waiting for you Jaeson!')
})

const beacons = require('./routes/beacons');


// Tell app to use the routes
app.use(beacons);


// Run cron jobs


app.listen(port, () => {
  console.log(`Listening on server port: ${port}`);
});