const mongoose = require("mongoose");

const playerSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  ODI: {
    type: Number,
    required: true,
  },
  T20: {
    type: Number,
    required: true,
  },
  Test: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Player", playerSchema);

