const express = require("express");
const Router = express.Router();
const buildingCltr = require("../app/controllers/buildingCltr");
const adminCltr = require("../app/controllers/admincltr");
const roomsCltr = require("../app/controllers/roomsCltr");
const tenantCltr = require("../app/controllers/tenantCltr");
const notificationCltr = require("../app/controllers/notificationCltr");
const {
  adminAuthentification,
} = require("../app/middlewares/adminAuthentification");

Router.post("/admin", adminCltr.create);
Router.post("/admin/login", adminCltr.login);
Router.post("/admin/update", adminAuthentification, adminCltr.update);
Router.get("/admin", adminAuthentification, adminCltr.list);

Router.post("/building", adminAuthentification, buildingCltr.create);
Router.get("/building", adminAuthentification, buildingCltr.lists);
Router.get("/building/:id", adminAuthentification, buildingCltr.list);
Router.delete("/building/:id", adminAuthentification, buildingCltr.delete);

Router.get("/rooms", adminAuthentification, roomsCltr.lists);
Router.get("/rooms/:id", adminAuthentification, roomsCltr.list);

Router.post("/tenants", adminAuthentification, tenantCltr.create);
Router.get("/tenants", adminAuthentification, tenantCltr.lists);
Router.get("/tenant/:id", adminAuthentification, tenantCltr.listById);
Router.delete("/tenants/delete", adminAuthentification, tenantCltr.delete);
Router.put("/tenants/update", adminAuthentification, tenantCltr.update);
Router.get(
  "/tenants/building/:id",
  adminAuthentification,
  tenantCltr.listByBuilding
);

Router.get("/notification", adminAuthentification, notificationCltr.lists);
Router.post("/notification", adminAuthentification, notificationCltr.create);

module.exports = Router;
