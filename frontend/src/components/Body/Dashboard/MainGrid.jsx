import React from "react";
import { Box, Grid, Stack } from "@mui/material";
import routes from "../../Routes/routes";

export default function MainGrid() {
  return (
    <Grid
      aria-label="main"
      container
      item
      sm={8}
      md={9}
      lg={9.5}
      p={1}
      spacing={0.5}
    >
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <Box
          borderRadius={5}
          maxHeight="90vh"
          overflow="auto"
          sx={{
            height: { xs: "90vh", sm: "87vh", md: "87vh", lg: "87vh" },
          }}
        >
          {routes()}
        </Box>
      </Grid>
    </Grid>
  );
}
