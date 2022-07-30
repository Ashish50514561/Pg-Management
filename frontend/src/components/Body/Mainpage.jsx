import React from "react";
import "./mainpage.css";
import { Box, Stack } from "@mui/material";

import A_Header from "../Header/A_Header";
import AddBuilding from "../Forms/AddBuilding";
import AddAdmin from "../Forms/AddAdmin";
import Adminlogin from "../Forms/Adminlogin";
import AddTenant from "../Forms/AddTenant";
import Adminhome from "./Dashboard/Adminhome";
import Modal from "../Modal/Modal";

export default function Mainpage() {
  return (
    <Stack
      bgcolor="#e2e8ed"
      px={{ xs: 0, sm: 2 }}
      className="mainpage"
      spacing={1}
    >
      <Modal />
      {<A_Header />}
      <Adminhome />
    </Stack>
  );
}
