  const itemsRouter = require('express').Router();
  const {
    allBeacons,
    getBeacon,
    addBeacons
  } = require('../controllers/beacons');


  beaconsRouter.get('/items', allBeacons)

  beaconsRouter.post('/item', addBeacons);

  beaconsRouter.route('/item/:id')
    // READ
    .get(getBeacon)
  // Update
  // Delete

  module.exports = beaconsRouter