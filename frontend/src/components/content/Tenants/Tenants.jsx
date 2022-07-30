import React from "react";
import { useEffect, useState } from "react";
import { Grid, Box, Button, Stack, Avatar, IconButton } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../../Modal/Modal";
import { asyncModal } from "../../../Redux/Actions/ModalAction";
import { asyncmodalData } from "../../../Redux/Actions/modalData";
import {
  asyncGetTenants,
  asyncDeleteTenants,
  asyncUpdateTenant,
} from "../../../Redux/Actions/tenantAction";

export default function Tenants() {
  const [deleteIds, setDeleteIds] = useState([]);
  const dispatch = useDispatch();

  const tenants = useSelector((state) => state.tenantReducer);

  const deleteTenant = () => {
    if (deleteIds.length != 0) {
      dispatch(asyncModal(true));
      dispatch(asyncmodalData(deleteIds));
    }
  };

  const handleCommit = (e) => {
    console.log(e);
    dispatch(asyncUpdateTenant(e));
    dispatch(asyncGetTenants());
  };

  const cols = [
    {
      field: "number",
      headerName: "No.",
      headerClassName: "super-app-theme---header",
      width: 50,
    },
    {
      field: "action",
      headerName: "Action",
      width: 60,
      sortable: false,
      renderCell: (params) => {
        console.log("fffffffffffffff", params);
        return (
          <Link to={`/tenant/${params.row.id}`}>
            <IconButton edge="start" size="small">
              <Avatar
                alt="Remy Sharp"
                src={
                  tenants.hasOwnProperty("success") &&
                  tenants.success[params.row.number - 1].image
                }
                size="large"
                sx={{ width: 35, height: 35 }}
              />
            </IconButton>
          </Link>
        );
      },
    },
    { field: "name", headerName: "Tenant Name", width: 130 },
    { field: "age", headerName: "Age", width: 50 },
    { field: "mobile", headerName: "Mobile", width: 130 },
    { field: "room", headerName: "Room ", width: 70 },
    { field: "adhaar", headerName: "Adhaar No.", width: 135 },
    { field: "payment", headerName: "Payment", width: 70 },
    {
      field: "paidTill",
      type: "date",
      editable: true,
      headerName: "Paid Till",
      width: 120,
    },
    { field: "building", headerName: "Building", width: 180 },
    { field: "email", headerName: "Email", width: 180 },
    { field: "address", headerName: "address", width: 250 },
  ];

  const rows =
    "success" in tenants &&
    tenants.success.map((tenant, i) => {
      return {
        id: tenant._id,
        number: i + 1,
        name: tenant.name,
        age: tenant.age,
        mobile: tenant.mobile,
        room: tenant.roomNumber,
        adhaar: tenant.adhaar,
        payment: tenant.paymentStatus,
        paidTill: tenant.paidTill,
        building: tenant.buildingName,
        email: tenant.email,
        address: tenant.address,
        image: tenant.image,
      };
    });

  useEffect(() => {
    dispatch(asyncGetTenants());
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
              position: "fixed",
              right: 40,
              bottom: 25,
              zIndex: 5,
              width: "70%",
            }}
          >
            <Stack direction="row" spacing={1}>
              <Button
                disabled={deleteIds.length === 0}
                size="small"
                variant="contained"
                onClick={deleteTenant}
              >
                Delete
              </Button>

              <Button
                size="small"
                variant="contained"
                onClick={() => dispatch(asyncGetTenants())}
              >
                Refresh
              </Button>
            </Stack>
          </div>

          <DataGrid
            sx={{
              boxShadow: 1,
              borderRadius: 3,
              bgcolor: "white",
            }}
            onCellEditCommit={handleCommit}
            disableSelectionOnClick
            checkboxSelection
            autoHeight={true}
            autoWidth={false}
            rows={rows}
            columns={cols}
            onSelectionModelChange={(id) => setDeleteIds(id)}
          />
        </Grid>
      </Box>
    </Grid>
  );
}
