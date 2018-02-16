const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema and Model

const GeoSchema = new Schema({
  type:{
    type: String,
    default: "Point"
  },
  coordinates: {
    type: [Number],
    index: "2dsphere"
  }
});

var KilliSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name field is required']
  },
  rank:{
    type: String,
  },
    available:{
      type: Boolean,
      default: false
    },
    geometry: GeoSchema
    // add in geo location
});

const Killi = mongoose.model('killi', KilliSchema);

module.exports = Killi;
