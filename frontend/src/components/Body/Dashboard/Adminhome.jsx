import { Grid, Box } from "@mui/material";
import React from "react";
import MainGrid from "./MainGrid";
import Mainmenu from "./Mainmenu";
import routes from "../../Routes/routes";
import A_Header from "../../Header/A_Header";

export default function Adminhome() {
  return (
    <Grid aria-label="parentmost" container spacing={0.5}>
      <Mainmenu />
      <MainGrid />
    </Grid>
  );
}
