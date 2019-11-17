const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BeaconSchema = new Schema({

  city: {
    type: String,
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