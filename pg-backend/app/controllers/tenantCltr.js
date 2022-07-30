const Building = require("../models/building");
const Tenant = require("../models/tenants");
const Room = require("../models/rooms");
const moment = require("moment");
const { checkRentStatus } = require("../middlewares/tenantRent");
const { findOne } = require("../models/building");

const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination:
    "/home/ashish/Desktop/ful-stack/PROJECTS/pg-management/frontend/public/images",
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({
  storage: storage,
}).single("image");

module.exports.create = async (req, res) => {
  const adminId = req.body.adminId;
  let newBody;
  const date = moment().format("YYYY-MM-DD");

  upload(req, res, async (err) => {
    const image = req.file.path.split("public")[1];
    console.log(image);
    const body = { ...req.body, image: image, adminId: adminId };

    console.log("chhhhhhh", body);

    try {
      const building = await Building.findOne({ _id: body.buildingId });

      if (body.paidTill > date) {
        newBody = {
          ...body,
          buildingName: building.buildingName,
          paymentStatus: "paid",
        };
      } else {
        newBody = {
          ...body,
          buildingName: building.buildingName,
          paymentStatus: "Due",
        };
      }
      const tenant = new Tenant(newBody);
      const response = await tenant.save();

      // update room status to occupied!!
      let roomStatus = false;

      const checkTenants = await Room.findOne({
        $and: [
          { roomNumber: response.roomNumber, buildingId: body.buildingId },
        ],
      });
      if (checkTenants.tenantName.length >= 3) {
        roomStatus = true;
      }

      const room = await Room.findOneAndUpdate(
        {
          $and: [
            { roomNumber: response.roomNumber, buildingId: body.buildingId },
          ],
        },
        {
          status: roomStatus ? "Occupied" : "Available",
          $push: { tenantName: response.name, userId: response._id },
        },
        { new: true }
      );
      // console.log(room);

      // res.json({ success: response });
    } catch (err) {
      console.log(err);
      res.json({ error: err });
    }
  });
};

module.exports.lists = async (req, res) => {
  try {
    const tenants = await Tenant.find();
    res.json({ success: tenants });
  } catch (err) {
    res.json({ error: err });
  }
};

module.exports.listByBuilding = async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  try {
    const tenants = await Tenant.find({
      $and: [{ adminId: body.adminId, buildingId: id }],
    });
    res.json({ success: tenants });
  } catch (err) {
    res.json({ error: err });
  }
};

module.exports.listById = async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  try {
    const tenants = await Tenant.find({
      $and: [{ adminId: body.adminId, _id: id }],
    });
    res.json({ success: tenants });
  } catch (err) {
    res.json({ error: err });
  }
};

module.exports.update = async (req, res) => {
  const body = req.body;
  const id = body.id;
  try {
    console.log(body.id);
    const date = moment(body.value).format("YYYY-MM-DD");
    const today = moment().format("YYYY-MM-DD");
    if (date > today) {
      const tenant = await Tenant.findByIdAndUpdate(
        id,
        { paidTill: date, paymentStatus: "Paid" },
        { new: true }
      );
    } else {
      const tenant = await Tenant.findByIdAndUpdate(
        id,
        { paidTill: date, paymentStatus: "Due" },
        { new: true }
      );
    }
    checkRentStatus();
  } catch (err) {
    console.log(err);
    res.json({ error: err });
  }
};

module.exports.delete = async (req, res) => {
  const data = req.header("Data");

  const body = req.body;
  console.log("bodydelete", body);
  const newData = data.split(",");
  try {
    //delete tenants name from room
    for (let i = 0; i < newData.length; i++) {
      const tenant = await Tenant.findById(newData[i]);

      const rooms = await Room.findOneAndUpdate(
        { userId: { $elemMatch: { $eq: newData[i] } } },

        {
          status: "Available",
          $pull: { tenantName: tenant.name, userId: newData[i] },
        },
        { new: true }
      );
    }
    //delete tenant
    if (!newData.includes("")) {
      const response = await Tenant.deleteMany({
        adminId: body.adminId,
        _id: { $in: newData },
      });
    }
  } catch (err) {
    console.log(err);
  }
};
