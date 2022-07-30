import React from "react";
import { Grid } from "@mui/material";
import Dashboardblocks from "./Dashboardblocks";
import Areachart from "./Areachart";
import Barchartt from "./Barchartt";
import Piechaart from "./Piechaart";

export default function Maindashboard() {
  return (
    <Grid container p={{ xs: 1, lg: 2 }} pt={{ xs: 2 }}>
      <Dashboardblocks />
      <Barchartt />
      <Areachart />
      <Piechaart />
    </Grid>
  );
}
