import { Box } from "@mui/system";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Drawer } from "@mui/material";
import Sidemenu from "./Sidemenu";
import { sideBar } from "../../Redux/Actions/showSidebar";

export default function SideBar() {
  const menu = useSelector((state) => state.sidebarReducer);
  const dispatch = useDispatch();

  return (
    <Box>
      <Drawer
        anchor="left"
        open={menu}
        onClose={() => dispatch(sideBar(false))}
      >
        <Box
          sx={{
            width: "60vw",
            height: "100vh",
          }}
        >
          <Sidemenu />
        </Box>
      </Drawer>
    </Box>
  );
}
