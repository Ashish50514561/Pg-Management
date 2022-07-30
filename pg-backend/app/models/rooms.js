const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const newSchema = new mongoose.Schema({
  buildingName: {
    type: String,
    required: true,
  },
  tenantName: [
    {
      type: String,
    },
  ],
  roomNumber: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  buildingId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  userId: [
    {
      type: Schema.Types.ObjectId,
    },
  ],
  adminId: {
    type: Schema.Types.ObjectId,
  },
});
const Room = mongoose.model("Room", newSchema);
module.exports = Room;
