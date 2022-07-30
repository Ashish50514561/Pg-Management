import React from "react";
import { useEffect } from "react";
import GroupIcon from "@mui/icons-material/Group";
import HouseIcon from "@mui/icons-material/House";
import { useSelector, useDispatch } from "react-redux";
import { asyncGetRoomsById } from "../../../Redux/Actions/roomsAction";
import { asyncGetTenantsByBuilding } from "../../../Redux/Actions/tenantAction";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import { Link } from "react-router-dom";

import {
  Grid,
  Box,
  Stack,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
} from "@mui/material";

export default function Blocks(props) {
  const { building, id } = props;

  const dispatch = useDispatch();
  const rooms = useSelector((state) => state.roomsReducer);
  const tenant = useSelector((state) => state.tenantReducer);

  const availableRooms =
    "success" in rooms &&
    rooms.success.filter((room) => room.status == "Available");

  useEffect(() => {
    dispatch(asyncGetRoomsById(id));
    dispatch(asyncGetTenantsByBuilding(id));
  }, []);

  return (
    <Grid container lg={12} spacing={1} item>
      <Grid aria-label="Tenants" item xs={6} md={3} lg={3}>
        <Box
          className="blocks"
          bgcolor="#ffffff"
          borderRadius={3}
          sx={{ height: { xs: 100, lg: 130 }, boxShadow: 1 }}
        >
          <Stack p={{ xs: 0.5, lg: 1.5 }}>
            <Box display="flex" justifyContent="center">
              <Typography
                color="primary.main"
                sx={{ fontSize: { xs: "1.9rem", lg: "2.4rem" } }}
              >
                {"success" in tenant ? tenant.success.length : "0"}
              </Typography>
            </Box>
            <Box display="flex" justifyContent="center">
              <List disablePadding>
                <ListItem disablePadding>
                  <ListItemIcon sx={{ minWidth: "45px" }}>
                    {/* <Box sx={{ fontSize: { lg: "4rem" } }}> */}
                    <Avatar sx={{ bgcolor: "primary.main" }}>
                      <GroupIcon
                        sx={{ fontSize: { lg: "1.6rem" } }}
                        color="#ffffff"
                      />
                    </Avatar>
                    {/* </Box> */}
                  </ListItemIcon>
                  <ListItemText>
                    <Typography
                      color="text.secondary"
                      sx={{ fontSize: { xs: "1.2rem", lg: "1.6rem" } }}
                    >
                      Tenants
                    </Typography>
                  </ListItemText>
                </ListItem>
              </List>
            </Box>
          </Stack>
        </Box>
      </Grid>

      <Grid aria-label="Rooms" item xs={6} md={3} lg={3}>
        <Box
          className="blocks"
          bgcolor="#ffffff"
          borderRadius={3}
          sx={{ height: { xs: 100, lg: 130 }, boxShadow: 1 }}
        >
          <Stack p={{ xs: 0.5, lg: 1.5 }}>
            <Box display="flex" justifyContent="center">
              <Typography
                color="primary.main"
                sx={{ fontSize: { xs: "1.9rem", lg: "2.4rem" } }}
              >
                {"success" in rooms && rooms.success.length}
              </Typography>
            </Box>
            <Box display="flex" justifyContent="center">
              <List disablePadding>
                <ListItem disablePadding>
                  <ListItemIcon sx={{ minWidth: "45px" }}>
                    <Avatar sx={{ bgcolor: "primary.main" }}>
                      <HouseIcon fontSize="medium" color="#ffffff" />
                    </Avatar>
                  </ListItemIcon>
                  <ListItemText>
                    <Typography
                      color="text.secondary"
                      sx={{ fontSize: { xs: "1.2rem", lg: "1.6rem" } }}
                    >
                      Rooms
                    </Typography>
                  </ListItemText>
                </ListItem>
              </List>
            </Box>
          </Stack>
        </Box>
      </Grid>

      <Grid aria-label="Available rooms" item xs={6} md={3} lg={3}>
        <Box
          className="blocks"
          bgcolor="#ffffff"
          borderRadius={3}
          sx={{ height: { xs: 100, lg: 130 }, boxShadow: 1 }}
        >
          <Stack p={{ xs: 0.5, lg: 1.5 }}>
            <Box display="flex" justifyContent="center">
              <Typography
                color="primary.main"
                sx={{ fontSize: { xs: "1.9rem", lg: "2.4rem" } }}
              >
                {availableRooms.length}
              </Typography>
            </Box>
            <Box display="flex" justifyContent="center">
              <List disablePadding>
                <ListItem disablePadding>
                  <ListItemIcon sx={{ minWidth: "45px" }}>
                    <Avatar sx={{ bgcolor: "primary.main" }}>
                      <HouseIcon fontSize="medium" color="#ffffff" />
                    </Avatar>
                  </ListItemIcon>
                  <ListItemText>
                    <Typography
                      color="text.secondary"
                      sx={{ fontSize: { xs: "1.2rem", lg: "1.6rem" } }}
                    >
                      Available
                    </Typography>
                  </ListItemText>
                </ListItem>
              </List>
            </Box>
          </Stack>
        </Box>
      </Grid>

      <Grid aria-label="AddBuilding" item xs={6} md={3} lg={3}>
        <Box
          className="blocks"
          bgcolor="#ffffff"
          borderRadius={3}
          sx={{ height: { xs: 100, lg: 130 }, boxShadow: 1 }}
        >
          <Link to="/addTenant" style={{ textDecoration: "none" }}>
            <Stack p={{ xs: 0.5, lg: 1.5 }}>
              <Box display="flex" justifyContent="center">
                <Typography
                  color="primary.main"
                  sx={{ fontSize: { xs: "1.9rem", lg: "2.4rem" } }}
                >
                  +
                </Typography>
              </Box>
              <Box display="flex" justifyContent="center">
                <List disablePadding>
                  <ListItem disablePadding>
                    <ListItemIcon sx={{ minWidth: "45px" }}>
                      <Avatar sx={{ bgcolor: "primary.main" }}>
                        <PersonAddAltIcon fontSize="medium" color="#ffffff" />
                      </Avatar>
                    </ListItemIcon>
                    <ListItemText>
                      <Typography
                        color="text.secondary"
                        sx={{ fontSize: { xs: "1.2rem", lg: "1.6rem" } }}
                      >
                        Add Tenant
                      </Typography>
                    </ListItemText>
                  </ListItem>
                </List>
              </Box>
            </Stack>
          </Link>
        </Box>
      </Grid>
    </Grid>
  );
}
