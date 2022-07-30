const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const newSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  mobile: {
    type: Number,
    required: true,
  },
  adhaar: {
    type: Number,
    required: true,
  },
  buildingName: {
    type: String,
    required: true,
  },
  roomNumber: {
    type: Number,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
  },
  address: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  paidTill: {
    type: String,
    required: true,
  },
  paymentStatus: {
    type: String,
  },
  paymentDueDate: {
    type: Date,
  },
  buildingId: {
    type: Schema.Types.ObjectId,
    required: true,
  },

  adminId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
});
const Tenant = mongoose.model("Tenant", newSchema);
module.exports = Tenant;
