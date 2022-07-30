const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const newSchema = new mongoose.Schema({
  buildingName: {
    type: String,
    required: true,
  },
  rooms: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  landmark: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
  },

  adminId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
});
const Building = mongoose.model("Building", newSchema);
module.exports = Building;
