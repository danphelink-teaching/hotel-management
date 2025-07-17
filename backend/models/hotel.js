const { default: mongoose } = require("mongoose");

const hotelSchema = new mongoose.Schema({
  name: String,
  address: String,
  contact: String,
  email: String,
});

const Hotel = mongoose.model("Hotel", hotelSchema);

module.exports = Hotel;
