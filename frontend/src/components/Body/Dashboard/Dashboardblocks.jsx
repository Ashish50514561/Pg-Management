import React from "react";
import { useEffect } from "react";
import GroupIcon from "@mui/icons-material/Group";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import HouseIcon from "@mui/icons-material/House";
import { useSelector, useDispatch } from "react-redux";
import { asyncGetBuildings } from "../../../Redux/Actions/buildingAction";
import { asyncGetTenants } from "../../../Redux/Actions/tenantAction";
import { asyncGetRooms } from "../../../Redux/Actions/roomsAction";
import {
  Skeleton,
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
import { Link } from "react-router-dom";

export default function Dashboardblocks() {
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.loadingReducer);
  const building = useSelector((state) => state.buildingReducer);
  const rooms = useSelector((state) => state.roomsReducer);
  const tenants = useSelector((state) => state.tenantReducer);

  const availableRooms = () => {
    const availableRoom = rooms.success.filter(
      (room) => room.status == "Available"
    );
    return availableRoom.length;
  };

  useEffect(() => {
    dispatch(asyncGetBuildings());
    dispatch(asyncGetRooms());
    dispatch(asyncGetTenants());
  }, []);
  return (
    <>
      <Grid container spacing={1} item>
        <Grid aria-label="Tenants" item xs={6} md={3} lg={3}>
          {/* {!loading ? ( */}
          <Link to="/tenants" style={{ textDecoration: "none" }}>
            <Box
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
                    {tenants.hasOwnProperty("success")
                      ? tenants.success.length
                      : 0}
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
          </Link>
          {/* ) : (
            <Skeleton height="100%" animation="wave" />
          )} */}
        </Grid>

        <Grid aria-label="Buildings" item xs={6} md={3} lg={3}>
          <Link to="/buildings" style={{ textDecoration: "none" }}>
            <Box
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
                    {building.hasOwnProperty("success")
                      ? building.success.length
                      : "0"}
                  </Typography>
                </Box>
                <Box display="flex" justifyContent="center">
                  <List disablePadding>
                    <ListItem disablePadding>
                      <ListItemIcon sx={{ minWidth: "45px" }}>
                        <Avatar sx={{ bgcolor: "primary.main" }}>
                          <HomeWorkIcon fontSize="medium" color="#ffffff" />
                        </Avatar>
                      </ListItemIcon>
                      <ListItemText>
                        <Typography
                          color="text.secondary"
                          sx={{ fontSize: { xs: "1.2rem", lg: "1.6rem" } }}
                        >
                          Buildings
                        </Typography>
                      </ListItemText>
                    </ListItem>
                  </List>
                </Box>
              </Stack>
            </Box>
          </Link>
        </Grid>

        <Grid aria-label="Rooms" item xs={6} md={3} lg={3}>
          <Box
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
                  {rooms.hasOwnProperty("success") ? rooms.success.length : "0"}
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
                  {rooms.hasOwnProperty("success") ? availableRooms() : "0"}
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
      </Grid>
    </>
  );
}
