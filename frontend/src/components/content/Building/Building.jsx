import React from "react";
import { useEffect } from "react";
import { Grid, Stack } from "@mui/material";
import { useParams } from "react-router-dom";
import Blocks from "./Blocks";
import { useSelector } from "react-redux";
import Building_Card from "./Building_Card";
import Grids from "./Grids";

export default function Building() {
  const { id } = useParams();
  const buildings = useSelector((state) => state.buildingReducer);

  const building =
    "success" in buildings &&
    buildings.success.filter((building) => building._id == id);

  return (
    <Grid container p={{ xs: 1, lg: 2 }} pt={{ xs: 2 }} spacing={2}>
      <Blocks building={building} id={id} />
      <Building_Card building={building} id={id} />
      <Grids building={building} id={id} />
    </Grid>
  );
}
