import React from "react";
import { Box } from "@mui/system";
import { Breadcrumbs, Link } from "@mui/material";

export default function BreadCrums() {
  return (
    <Box>
      <Breadcrumbs separator=">">
        <Link underline="hover" color="inherit" href="/">
          Home
        </Link>
        <Link underline="hover" color="inherit" href="/" fontSize="small">
          Buildings
        </Link>
        <Link underline="hover" color="inherit" href="/" fontSize="small">
          Rooms
        </Link>
      </Breadcrumbs>
    </Box>
  );
}
