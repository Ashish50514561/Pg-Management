import React from "react";
import SearchBar from "material-ui-search-bar";
import { Stack } from "@mui/material";

export default function Searchbox() {
  return (
    <Stack
      ml={3}
      sx={{ display: { xs: "none", sm: "block" }, width: { lg: 420 } }}
    >
      <SearchBar
        style={{
          height: 35,

          boxShadow: "none",
        }}
      />
    </Stack>
  );
}
