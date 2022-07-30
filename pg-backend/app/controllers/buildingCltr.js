const { response } = require("express");
const Building = require("../models/building");
const Room = require("../models/rooms");
const Tenant = require("../models/tenants");
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
  upload(req, res, async (err) => {
    const image = req.file.path.split("public")[1];
    console.log(image);
    const body = { ...req.body, image: image, adminId: adminId };

    try {
      const building = new Building(body);
      const response = await building.save();
      console.log("resppnse", response);

      const insertRooms = () => {
        const rooms = [];
        for (i = 0; i < response.rooms; i++) {
          rooms.push({
            buildingName: response.buildingName,
            roomNumber: i + 1,
            status: "Available",
            buildingId: response._id,
            adminId: response.adminId,
          });
        }
        return rooms;
      };

      const room = await Room.insertMany(insertRooms());

      // res.json({ success: response });
    } catch (err) {
      res.json({ error: err });
    }
  });
};

module.exports.lists = async (req, res) => {
  const body = req.body;
  try {
    const buildings = await Building.find({ adminId: body.adminId });
    res.json({ success: buildings });
  } catch (err) {
    res.json({ error: err });
  }
};

module.exports.list = async (req, res) => {
  const body = req.body;
  const id = req.params.id;

  try {
    const building = await Building.findOne({
      $and: [{ adminId: body.adminId, _id: id }],
    });
    res.json({ success: building });
  } catch (err) {
    res.json({ error: err });
  }
};

module.exports.delete = async (req, res) => {
  const id = req.params.id;

  const building = await Building.findByIdAndDelete(id);
  const rooms = await Room.deleteMany({ buildingId: id });
  const tenants = await Tenant.deleteMany({ buildingId: id });
  console.log(building);
  console.log(rooms);
  console.log(tenants);
};
