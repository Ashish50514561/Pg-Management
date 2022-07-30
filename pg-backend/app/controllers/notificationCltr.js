const Notification = require("../models/notification");
const moment = require("moment");

module.exports.lists = async (req, res) => {
  const id = req.body.adminId;
  const notification = await Notification.find({ adminId: id });
  console.log(notification.length);
  if (notification.length > 10) {
    const result = notification.reverse().slice(0, 9);
    res.json({ success: result });
    console.log("chl");
  } else {
    const result = notification.reverse();
    res.json({ success: result });
    console.log("hmmm");
  }
};

module.exports.create = async (req, res) => {
  const body = req.body;

  const date = moment().format("DD-MMMM");
  try {
    const notification = new Notification({
      ...body,
      date: date,
      content: body.note,
    });
    const response = await notification.save();
    console.log(response);
  } catch (err) {
    res.json({ error: err });
  }
};
