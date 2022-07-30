import { Grid, Stack } from "@mui/material";
import React from "react";
import Dashboardblocks from "../../Body/Dashboard/Dashboardblocks";
import BuildingCards from "./BuildingCards";

export default function BuildingsDetail() {
  return (
    <Grid container p={{ xs: 1, lg: 2 }} pt={{ xs: 2 }} spacing={2}>
      <Dashboardblocks />
      <BuildingCards />
    </Grid>
  );
}
