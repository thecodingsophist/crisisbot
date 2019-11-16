const {
  Beacon
} = require('../models/beacon');

// Index
const allBeacons = async (req, res) => {

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

};


module.exports = {
  allBeacons,
  getBeacon,
  addBeacon
}