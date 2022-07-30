import React from "react";
import { Grid } from "@mui/material";
import A_Header from "../../components/Header/A_Header";

export default function User_homepage() {
  return (
    <Grid container bgcolor="primary.main">
      <Grid item lg={12}>
        <A_Header />
      </Grid>
    </Grid>
  );
}
