const {
  Beacon
} = require('../models/beacon');


// Google Maps
const googleMapsClient = require('@google/maps').createClient({
  key: process.env.GOOGLE_MAP_API_KEY
});


// Index
const allBeacons = async (req, res) => {
  const beacons = await Beacon.find()

  let city = beacons[0].city
  let state = beacons[0].state
  let address = beacons[0].street

  googleMapsClient.geocode({
    address: `${address}, ${city}, ${state}`
  }, function (err, response) {
    if (!err) {

      return res.status(200).json(response.json.results[0].geometry.viewport.northeast)
      // beacons ? res.status(200).json(response.json.results) : res.status(500).json('Something went wrong.');

    }
  });






};

// Create
const addBeacon = (req, res) => {
  try {
    const beacon = new Beacon(req.body);
    beacon.save();
    return res.status(200).json(beacon);

  } catch (err) {

    return res.status(500).send(err);
  }




};
// Read
const getBeacon = async (req, res) => {
  try {
    const beacon = await Beacon.findById(req.params.id);
    res.status(200).json(beacon);
  } catch (err) {
    return res.status(500).send(err);
  }
};

const messageBot = (req, res) => {
  console.log(req.body)
}

module.exports = {
  allBeacons,
  getBeacon,
  addBeacon
}