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
  location: {
    city: String,
    country: String,
    latitude: Number,
    longitude: Number,
    state: String,
    street: String,
    zip: String
  }
}, {
  timestamps: true
});


const Beacon = mongoose.model('Beacon', BeaconSchema);
module.exports = {
  Beacon
};




