import React from "react";
import BreadCrums from "./BreadCrums";
import SideBar from "./SideBar";
import MapsHomeWorkIcon from "@mui/icons-material/MapsHomeWork";
import SettingsIcon from "@mui/icons-material/Settings";
import { useState, useEffect } from "react";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import { useDispatch, useSelector } from "react-redux";
import { sideBar } from "../../Redux/Actions/showSidebar";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import { Badge } from "@mui/material";
import { Link } from "react-router-dom";
import Searchbox from "../Body/searchBox/Searchbox";
import { asyncNotification } from "../../Redux/Actions/notificationAction";
import Notification from "../NotificationDrawer/Notification";
import { asyncResetNotificationCount } from "../../Redux/Actions/notificationCountAction";
import {
  IconButton,
  Box,
  Stack,
  Avatar,
  Skeleton,
  Typography,
  Grid,
} from "@mui/material";

export default function A_Header() {
  const dispatch = useDispatch();
  const notifyArray = useSelector((state) => state.notifyArrayReducer);
  const notificationCount = useSelector(
    (state) => state.notificationCountReducer
  );

  const [anchorEl, setAnchorEl] = useState(null);

  const handleNotificationMenu = (e) => {
    setAnchorEl(e.currentTarget);
    dispatch(asyncNotification(true));
    dispatch(asyncResetNotificationCount());
  };

  return (
    <Stack
      aria-label="parent_Div"
      bgcolor={{ xs: "white", sm: "#e2e8ed" }}
      alignItems="center"
      direction="row"
      pt={1}
      px={{ sm: 1 }}
      justifyContent="space-between"
      sx={{ height: { xs: "9vh", sm: 57 } }}
    >
      <Stack
        p={{ sm: 0.3 }}
        pl={{ sm: 1 }}
        aria-label="menuIcon_BreadCrums"
        bgcolor="white"
        direction="row"
        spacing={{ xs: 0.5, lg: 2 }}
        alignItems="center"
        justifyContent="center"
        sx={{
          sm: { boxShadow: 1 },
          borderRadius: 3,
          width: { sm: "32%", md: "24%", lg: "20.5%" },
        }}
      >
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <IconButton edge="start" size="small">
            <MapsHomeWorkIcon color="primary" fontSize="large" />
          </IconButton>
        </Box>

        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <Typography color="primary.main" variant="h6">
            Star Stays
          </Typography>
        </Box>
        <Box
          sx={{ display: { xs: "block", sm: "none", md: "none", lg: "none" } }}
        >
          <IconButton
            edge="start"
            size="small"
            onClick={() => dispatch(sideBar(true))}
          >
            <FormatListBulletedIcon color="primary" fontSize="large" />
          </IconButton>
        </Box>
        <SideBar />
        <Box sx={{ display: { sm: "none" } }}>
          <BreadCrums />
        </Box>
      </Stack>

      <Stack
        aria-label="icons"
        bgcolor="white"
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        p={{ sm: 0.3 }}
        mr={{ sm: 2 }}
        spacing={{ xs: 0.5, md: 15 }}
        sx={{
          sm: { boxShadow: 1 },
          borderRadius: 3,
          width: { sm: "62%", md: "72%", lg: "76.5%" },
        }}
      >
        <Searchbox />

        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-evenly"
          spacing={{ xs: 0.5, md: 1 }}
        >
          <Box>
            <IconButton
              id="notification-button"
              edge="start"
              size="small"
              sx={{ border: "0.5px solid grey", borderRadius: 3 }}
              onClick={handleNotificationMenu}
            >
              <Badge
                badgeContent={notificationCount.length}
                color="error"
                sx={{ "& .MuiBadge-badge": { height: 20, width: 5 } }}
              >
                <NotificationsOutlinedIcon color="primary" />
              </Badge>
            </IconButton>
          </Box>

          <Notification anchorEl={anchorEl} />

          <Box>
            <IconButton
              edge="start"
              size="small"
              sx={{
                border: "0.5px solid grey",
                borderRadius: 3,
                display: { xs: "none", md: "block" },
              }}
            >
              <SettingsIcon color="primary" />
            </IconButton>
          </Box>

          <Box>
            <Link to="/account">
              <IconButton edge="start" size="small">
                <Avatar
                  alt="Remy Sharp"
                  src="https://wallpaperaccess.com/full/2309745.jpg"
                  size="large"
                  sx={{ width: 35, height: 35 }}
                />
              </IconButton>
            </Link>
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
}
