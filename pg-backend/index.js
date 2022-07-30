const { checkRentStatus } = require("./app/middlewares/tenantRent");
const express = require("express");
const Router = require("./config/routes");
const dbConnect = require("./config/db");
const CronJob = require("cron").CronJob;
const cors = require("cors");
const app = express();

const job = new CronJob(
  " 1 1 1 * * *",
  function () {
    console.log("You will see this message every second");
    checkRentStatus();
  },
  null,
  true,
  "America/Los_Angeles"
);

dbConnect();
app.use(express.json());
app.use(cors());
app.use(Router);

const port = 3001;
app.listen(port, (err) => {
  err && console.log(err);
  console.log("server running on", port);
});
