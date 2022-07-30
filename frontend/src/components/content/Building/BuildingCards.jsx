import React from "react";
import { Grid } from "@mui/material";
import { useSelector } from "react-redux";

import B_Card from "./B_Card";
import { Link } from "react-router-dom";
import { Box } from "@mui/system";

export default function BuildingCards() {
  const building = useSelector((state) => state.buildingReducer);

  return (
    <Grid container spacing={2} item>
      {"success" in building &&
        building.success.map((building) => {
          return <B_Card {...building} />;
        })}
    </Grid>
  );
}
