import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import DomainAddIcon from "@mui/icons-material/DomainAdd";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import SettingsIcon from "@mui/icons-material/Settings";
import { Link } from "react-router-dom";
import {
  Grid,
  Paper,
  Box,
  Stack,
  Typography,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemButton,
  Divider,
} from "@mui/material";
import { useSelector } from "react-redux";
import { useState } from "react";

export default function Mainmenu() {
  const [render, setRender] = useState(false);
  const loginState = useSelector((state) => state.adminReducer);

  return (
    <Grid
      container
      item
      sm={4}
      md={3}
      lg={2.5}
      sx={{ display: { xs: "none", sm: "block", lg: "block" } }}
    >
      <Box
        bgcolor="white"
        borderRadius={5}
        sx={{ height: "87vh", boxShadow: 1 }}
      >
        <Stack justifyContent="space-between" divider={<Divider />}>
          <Box>
            <List>
              <Link to="/" style={{ textDecoration: "none" }}>
                <ListItem aria-label="dashboard">
                  <ListItemButton borderRadius={1}>
                    <ListItemIcon sx={{ minWidth: "35px" }}>
                      <DashboardIcon color="info" />
                    </ListItemIcon>
                    <ListItemText>
                      <Typography color="info.main" variant="h6">
                        DashBoard
                      </Typography>
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
              </Link>

              <Link to="/tenants" style={{ textDecoration: "none" }}>
                <ListItem aria-label="tenants" borderRadius={1}>
                  <ListItemButton>
                    <ListItemIcon sx={{ minWidth: "35px" }}>
                      <GroupIcon color="info" />
                    </ListItemIcon>
                    <ListItemText>
                      <Typography color="text.secondary" variant="h7">
                        Tenants
                      </Typography>
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
              </Link>

              <Link to="/buildings" style={{ textDecoration: "none" }}>
                <ListItem aria-label="buildings" borderRadius={1}>
                  <ListItemButton>
                    <ListItemIcon sx={{ minWidth: "35px" }}>
                      <HomeWorkIcon color="info" />
                    </ListItemIcon>
                    <ListItemText>
                      <Typography color="text.secondary" variant="h7">
                        Buildings
                      </Typography>
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
              </Link>

              <Link to="/rooms" style={{ textDecoration: "none" }}>
                <ListItem aria-label="addRooms" borderRadius={1}>
                  <ListItemButton>
                    <ListItemIcon sx={{ minWidth: "35px" }}>
                      <AddBusinessIcon color="info" />
                    </ListItemIcon>
                    <ListItemText>
                      <Typography color="text.secondary" variant="h7">
                        View Rooms
                      </Typography>
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
              </Link>

              <Link to="/addTenant" style={{ textDecoration: "none" }}>
                <ListItem aria-label="addTenants" borderRadius={1}>
                  <ListItemButton>
                    <ListItemIcon sx={{ minWidth: "35px" }}>
                      <PersonAddAltIcon color="info" />
                    </ListItemIcon>
                    <ListItemText>
                      <Typography color="text.secondary" variant="h7">
                        Add Tenants
                      </Typography>
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
              </Link>

              <Link to="/addBuilding" style={{ textDecoration: "none" }}>
                <ListItem aria-label="addBuildings" borderRadius={1}>
                  <ListItemButton>
                    <ListItemIcon sx={{ minWidth: "35px" }}>
                      <DomainAddIcon color="info" />
                    </ListItemIcon>
                    <ListItemText>
                      <Typography color="text.secondary" variant="h7">
                        Add Building
                      </Typography>
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
              </Link>

              <Link to="/rooms/details" style={{ textDecoration: "none" }}>
                <ListItem borderRadius={1}>
                  <ListItemButton>
                    <ListItemIcon sx={{ minWidth: "35px" }}>
                      <DomainAddIcon color="info" />
                    </ListItemIcon>
                    <ListItemText>
                      <Typography color="text.secondary" variant="h7">
                        Rooms Status
                      </Typography>
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
              </Link>
            </List>
          </Box>

          <Box>
            <List>
              <Link to="/login" style={{ textDecoration: "none" }}>
                <ListItem aria-label="logout">
                  <ListItemButton
                    borderRadius={1}
                    onClick={() => {
                      setRender(!render);
                      localStorage.removeItem("token");
                    }}
                  >
                    <ListItemIcon sx={{ minWidth: "35px" }}>
                      <LogoutIcon color="info" />
                    </ListItemIcon>
                    <ListItemText>
                      <Typography color="info.main" variant="h7">
                        {localStorage.getItem("token") ? "Logout" : "Login"}
                      </Typography>
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
              </Link>

              <ListItem aria-label="settings">
                <ListItemButton borderRadius={1}>
                  <ListItemIcon sx={{ minWidth: "35px" }}>
                    <SettingsIcon color="info" />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography color="info.main" variant="h7">
                      Settings
                    </Typography>
                  </ListItemText>
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
        </Stack>
      </Box>
    </Grid>
  );
}
