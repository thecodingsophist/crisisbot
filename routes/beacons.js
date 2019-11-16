  const BeaconsRouter = require('express').Router();
  const {
    allBeacons,
    getBeacon,
    addBeacons
  } = require('../controllers/beacons');


  BeaconsRouter.get('/beacons', allBeacons)

  BeaconsRouter.post('/beacon', addBeacons);

  beaconsRouter.route('/beacons/:id')
    // READ
    .get(getBeacon)
  // Update
  // Delete

  module.exports = beaconsRouter