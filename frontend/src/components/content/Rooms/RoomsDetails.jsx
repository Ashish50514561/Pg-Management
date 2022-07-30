import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DataGrid } from "@mui/x-data-grid";
import { Stack, Button, Box, Grid } from "@mui/material";
import { asyncGetRooms } from "../../../Redux/Actions/roomsAction";

export default function RoomsDetails() {
  const dispatch = useDispatch();
  const rooms = useSelector((state) => state.roomsReducer);
  const cols = [
    {
      field: "room",
      headerName: "Room No.",
      width: 80,
    },
    {
      field: "building",
      headerName: "Building Name",
      width: 150,
    },
    {
      field: "status",
      headerName: "Room Status",
      width: 150,
    },
    {
      field: "tenants",
      headerName: "Tenants Name",
      width: 400,
    },
  ];
  console.log("best", rooms.hasOwnProperty("success") && rooms);

  const rows =
    rooms.hasOwnProperty("success") &&
    rooms.success.map((room, i) => {
      return {
        id: room._id,
        room: room.roomNumber,
        building: room.buildingName,
        status: room.status,
        tenants: room.tenantName,
      };
    });

  useEffect(() => {
    dispatch(asyncGetRooms());
  }, []);

  return (
    <Grid item p={{ xs: 1, lg: 2 }} pt={{ xs: 2 }} pb={{ lg: 1 }}>
      <Box>
        <Grid container item sx={{ position: "relative" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              paddingLeft: "20px",
              position: "absolute",
              right: 20,
              bottom: 10,
              zIndex: 5,
              backgroundColor: "white",
              width: "70%",
            }}
          >
            <Stack direction="row" spacing={1}>
              <Button
                size="small"
                variant="contained"
                // onClick={() => dispatch(asyncGetTenants())}
              >
                Refresh
              </Button>
            </Stack>
          </div>

          <DataGrid
            // getRowId={(row) => row.id}
            sx={{
              boxShadow: 1,
              borderRadius: 3,
              bgcolor: "white",
            }}
            disableSelectionOnClick
            checkboxSelection
            autoHeight={true}
            autoWidth={false}
            rows={rows}
            columns={cols}
          />
        </Grid>
      </Box>
    </Grid>
  );
}
