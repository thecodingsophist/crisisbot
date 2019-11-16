  const BeaconsRouter = require('express').Router();
  const {
    allBeacons,
    getBeacon,
    addBeacon
  } = require('../controllers/beacons');


  BeaconsRouter.get('/beacons', allBeacons)

  BeaconsRouter.post('/beacon', addBeacon);

  beaconsRouter.route('/beacons/:id')
    // READ
    .get(getBeacon)
  // Update
  // Delete

  module.exports = beaconsRouter