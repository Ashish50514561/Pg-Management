import React from "react";
import { Route, Routes } from "react-router-dom";
import Mainpage from "../Body/Mainpage";
import Adminlogin from "../Forms/Adminlogin";

export default function LoginRoute() {
  return (
    <Routes>
      {/* <Route exact path="/login" element={<Adminlogin />} /> */}
      {/* <Route exact path="/" element={<Mainpage />} /> */}
    </Routes>
  );
}
