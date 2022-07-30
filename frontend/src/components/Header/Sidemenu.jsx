import React from "react";
import "./sidemenu.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import DomainAddIcon from "@mui/icons-material/DomainAdd";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
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
import { Link } from "react-router-dom";

export default function Sidemenu() {
  return (
    <Grid container item lg={2.5}>
      <Box borderRadius={5} p={0}>
        <Stack justifyContent="space-between" divider={<Divider />}>
          <Box>
            <List>
              <ListItem>
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

              <ListItem borderRadius={1}>
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

              <ListItem borderRadius={1}>
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

              <ListItem borderRadius={1}>
                <ListItemButton>
                  <ListItemIcon sx={{ minWidth: "35px" }}>
                    <AddBusinessIcon color="info" />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography color="text.secondary" variant="h7">
                      Add Rooms
                    </Typography>
                  </ListItemText>
                </ListItemButton>
              </ListItem>

              <ListItem borderRadius={1}>
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

              <ListItem borderRadius={1}>
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

              <ListItem borderRadius={1}>
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
            </List>
          </Box>

          <Box>
            <List>
              <Link to="/login" style={{ textDecoration: "none" }}>
                <ListItem>
                  <ListItemButton borderRadius={1}>
                    <ListItemIcon sx={{ minWidth: "35px" }}>
                      <LogoutIcon color="info" />
                    </ListItemIcon>
                    <ListItemText>
                      <Typography color="info.main" variant="h7">
                        Logout
                      </Typography>
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
              </Link>

              <ListItem>
                <ListItemButton borderRadius={1}>
                  <ListItemIcon sx={{ minWidth: "35px" }}>
                    <AccountCircleIcon color="info" />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography color="info.main" variant="h7">
                      Account
                    </Typography>
                  </ListItemText>
                </ListItemButton>
              </ListItem>

              <ListItem>
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
