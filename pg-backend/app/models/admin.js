const mongoose = require("mongoose");
const newSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
  },
  confirmPassword: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});
const Admin = mongoose.model("Admin", newSchema);

module.exports = Admin;
