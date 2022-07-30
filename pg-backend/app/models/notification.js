const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const newSchema = new Schema({
  content: {
    type: String,
    required: true,
  },
  date: {
    type: String,
  },
  adminId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
});
const Notification = mongoose.model("Notification", newSchema);

module.exports = Notification;
