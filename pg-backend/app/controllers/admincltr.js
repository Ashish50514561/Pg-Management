const Admin = require("../models/admin");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { adminSecretKey } = require("../secretKeys/secretkeys");
const { findByIdAndUpdate } = require("../models/admin");

module.exports.create = async (req, res) => {
  const body = req.body;
  try {
    const salt = await bcryptjs.genSalt();
    const hashedPassword = await bcryptjs.hash(body.password, salt);
    const admin = new Admin({
      ...body,
      password: hashedPassword,
      confirmPassword: "",
    });
    const adminResponse = await admin.save();
    res.json({ success: adminResponse });
  } catch (err) {
    res.json({ error: err });
  }
};

module.exports.update = async (req, res) => {
  const body = req.body;
  console.log({ body });
  const id = body.adminId;
  try {
    const salt = await bcryptjs.genSalt();
    const hashedPassword = await bcryptjs.hash(body.password, salt);
    const admin = {
      ...body,
      password: hashedPassword,
      confirmPassword: "",
    };
    const response = await Admin.findByIdAndUpdate(id, admin, { new: true });
    console.log({ response });
    res.json({ success: adminResponse });
  } catch (err) {
    res.json({ error: err });
  }
};

module.exports.login = async (req, res) => {
  const body = req.body;
  try {
    const admin = await Admin.findOne({ email: body.email });
    if (!admin) {
      res.json({ error: "invalid email or password" });
    } else {
      const validAdmin = await bcryptjs.compare(body.password, admin.password);
      if (!validAdmin) {
        res.json({ error: "invalid email or password" });
      } else {
        const tokenData = {
          name: admin.name,
          id: admin.id,
          email: admin.email,
        };
        const token = jwt.sign(tokenData, adminSecretKey);
        res.json({ successToken: `bearer ${token}` });
      }
    }
  } catch (err) {
    res.json({ error: err });
  }
};

module.exports.list = async (req, res) => {
  const body = req.body;
  try {
    const admin = await Admin.findOne({ _id: body.adminId });
    res.json({ success: admin });
  } catch (err) {
    res.json({ error: err });
  }
};
