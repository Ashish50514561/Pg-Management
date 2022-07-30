const Tenant = require("../models/tenants");
const moment = require("moment");

const checkRentStatus = async () => {
  try {
    const date = moment().format("YYYY-MM-DD");
    const updatedTenants = await Tenant.updateMany(
      { paidTill: date },
      { paymentStatus: "Due" }
    );
  } catch (err) {
    console.log(err);
  }
};

module.exports = { checkRentStatus };
