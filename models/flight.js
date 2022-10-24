const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
  airport: {
    type: String,
    enum: ["AUS", "DFW", "DEN", "LAX", "SAN"],
  },
  arrival: {
    type: Date,
    default: Date.now() + 31536000000,
  },
});
const flightSchema = new Schema({
  airline: {
    type: String,
    enum: ["American", "Southwest", "United"],
  },
  airport: {
    type: String,
    default: "DEN",
    enum: ["AUS", "DFW", "DEN", "LAX", "SAN"],
  },
  flightNo: {
    type: Number,
    required: true,
    min: 10,
    max: 9999,
  },
  departs: {
    type: Date,
    default: Date.now() + 31536000000,
  },
  destinations: [destinationSchema],
});

module.exports = mongoose.model("Flight", flightSchema);
