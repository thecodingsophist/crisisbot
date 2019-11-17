const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BeaconSchema = new Schema({
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String
  },
  profile_pic: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  latitude: {
    type: Number,
    required: true
  },
  longitude: {
    type: Number,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  street: {
    type: String,
    required: true
  },
  zip: {
    type: String,
    required: true
  }


}, {
  timestamps: true
});


const Beacon = mongoose.model('Beacon', BeaconSchema);
module.exports = {
  Beacon
};