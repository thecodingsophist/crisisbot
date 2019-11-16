require('dotenv').config();
const express = require('express');

const app = express();
const port = process.env.PORT;

// dbConnection
require('./dbConnection/mongo');

// Body Parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Cookie Parser
app.use(cookieParser());

// Disables CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", process.env.CROSS_ORIGIN);
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Import the routes


// Tell app to use the routes


// Run cron jobs


app.listen(port, () => {
  console.log(`Listening on server port: ${port}`);
});