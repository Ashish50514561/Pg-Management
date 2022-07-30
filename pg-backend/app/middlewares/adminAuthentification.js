const jwt = require("jsonwebtoken");
const { adminSecretKey } = require("../secretKeys/secretkeys");

const adminAuthentification = async (req, res, next) => {
  const body = req.body;

  const token = req.header("Authorization").split(" ")[1];
  const tokenData = jwt.verify(token, adminSecretKey);
  const data = { ...body, adminId: tokenData.id };

  req.body = data;

  next();
};
module.exports = {
  adminAuthentification,
};
