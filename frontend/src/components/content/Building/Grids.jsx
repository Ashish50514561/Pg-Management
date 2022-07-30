import React from "react";
import { useEffect, useState } from "react";
import { Grid, Box, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { asyncModal } from "../../../Redux/Actions/ModalAction";
import { asyncmodalData } from "../../../Redux/Actions/modalData";
import {
  asyncGetTenantsByBuilding,
  asyncDeleteTenants,
  asyncUpdateTenant,
} from "../../../Redux/Actions/tenantAction";

export default function Grids(props) {
  const [deleteIds, setDeleteIds] = useState([]);
  const { id } = props;
  const dispatch = useDispatch();
  const tenants = useSelector((state) => state.tenantReducer);
  console.log("hdmmdm", tenants);
  console.log({ deleteIds });

  const deleteTenant = () => {
    if (deleteIds.length != 0) {
      dispatch(asyncModal(true));
      dispatch(asyncmodalData(deleteIds));
    }
  };

  const handleCommit = (e) => {
    console.log(e);
    dispatch(asyncUpdateTenant(e));
    dispatch(asyncGetTenantsByBuilding(id));
  };

  const cols = [
    {
      field: "number",
      headerName: "No.",
      headerClassName: "super-app-theme---header",
      width: 50,
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
      width: 100,
    },
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
        email: tenant.email,
        address: tenant.address,
      };
    });

  useEffect(() => {
    dispatch(asyncGetTenantsByBuilding(id));
  }, [deleteIds]);
  useEffect(() => {
    dispatch(asyncGetTenantsByBuilding(id));
  }, []);

  return (
    <Grid mt={3} container item sx={{ position: "relative" }}>
      <div
        style={{
          paddingLeft: "20px",
          position: "absolute",
          right: 15,
          bottom: 10,
          zIndex: 5,
        }}
      >
        <Button size="small" variant="contained" onClick={deleteTenant}>
          Delete
        </Button>
      </div>

      <DataGrid
        sx={{
          boxShadow: 1,
          borderRadius: 1,
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
  );
}
