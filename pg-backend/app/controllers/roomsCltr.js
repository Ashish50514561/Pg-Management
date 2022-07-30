const Room = require("../models/rooms");

module.exports.lists = async (req, res) => {
  const body = req.body;
  try {
    const rooms = await Room.find({ adminId: body.adminId });
    res.json({ success: rooms });
  } catch (err) {
    res.json({ error: err });
  }
};

module.exports.list = async (req, res) => {
  const body = req.body;
  const id = req.params.id;
  try {
    const rooms = await Room.find({
      $and: [{ adminId: body.adminId, buildingId: id }],
    });
    res.json({ success: rooms });
  } catch (err) {
    res.json({ error: err });
  }
};

// module.exports.availableRooms = async (req, res) => {
//   const body = req.body;
//   try {
//     const rooms = await Room.find([
//       {
//         adminId: body.adminId,
//         // status: "Available",
//       },
//       {
//         roomNumber: 10,
//       },
//     ]);
//     console.log(rooms);
//     res.json({ success: rooms });
//   } catch (err) {
//     res.json({ error: err });
//   }
// };
