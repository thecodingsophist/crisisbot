  const BeaconsRouter = require('express').Router();
  const {
    allBeacons,
    getBeacon,
    addBeacon
  } = require('../controllers/beacons');


  BeaconsRouter.get('/beacons', allBeacons)

  BeaconsRouter.post('/beacons', addBeacon);

  BeaconsRouter.route('/beacons/:id')
    // READ
    .get(getBeacon)
  // Update
  // Delete

  module.exports = BeaconsRouter