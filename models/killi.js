const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema and Model

var killiSchema = new Schema({
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
    }
    // add in geo location
});

const Killi = mongoose.model('killi', killiSchema);

module.exports = Killi;
