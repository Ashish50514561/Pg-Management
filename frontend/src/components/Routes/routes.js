import React from "react";
import Adminlogin from "../Forms/Adminlogin";
import { Routes, Route } from "react-router-dom";
import Maindashboard from "../Body/Dashboard/Maindashboard";
import AddBuilding from "../Forms/AddBuilding";
import Account from "../Adminaccount/Account";
import AddAdmin from "../Forms/AddAdmin";
import AddTenant from "../Forms/AddTenant";
import BuildingsDetail from "../content/Building/BuildingsDetail";
import Building from "../content/Building/Building";
import Tenants from "../content/Tenants/Tenants";
import Tenantprofile from "../content/Tenants/Tenantprofile";
import Rooms from "../content/Rooms/Rooms";
import RoomsDetails from "../content/Rooms/RoomsDetails";

export default function routes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Maindashboard />} />
        <Route exact path="/login" element={<Adminlogin />} />
        <Route exact path="/addBuilding" element={<AddBuilding />} />
        <Route exact path="/account" element={<Account />} />
        <Route exact path="/admin/:id" element={<AddAdmin />} />
        <Route exact path="/addTenant" element={<AddTenant />} />
        <Route exact path="/buildings" element={<BuildingsDetail />} />
        <Route exact path="/building/:id" element={<Building />} />
        <Route exact path="/tenants" element={<Tenants />} />
        <Route exact path="/tenant/:id" element={<Tenantprofile />} />
        <Route exact path="/rooms" element={<Rooms />} />
        <Route exact path="/rooms/details" element={<RoomsDetails />} />
      </Routes>
    </div>
  );
}
