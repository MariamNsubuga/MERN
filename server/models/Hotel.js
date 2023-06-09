const mongoose = require('mongoose');

const HotelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  cuisine: {
    type: String,
    required: true
  },
  location: {
    type: String
  },
  image: {
    type: String
  }
  
});

module.exports = Hotel = mongoose.model('hotel', HotelSchema);