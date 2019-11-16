const {
  Beacon
} = require('../models/beacon');

// Index
const allBeacons = async (req, res) => {
  const beacons = await Beacon.find()

  beacons ? res.status(200).json(beacons) : res.status(500).json('Something went wrong.');
};

// Create
const addBeacon = async (req, res) => {
  try {
    const beacon = await new Beacon(req.body);
    await beacon.save();

    return res.status(200).send(beacon);

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


module.exports = {
  allBeacons,
  getBeacon,
  addBeacon
}