import React from "react";
import { useEffect } from "react";
import { Stack, Box, Menu, MenuItem, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { asyncNotification } from "../../Redux/Actions/notificationAction";
import { asyncGetNotifyArray } from "../../Redux/Actions/notifyArrayAction";

export default function Notification(props) {
  const { anchorEl } = props;

  const dispatch = useDispatch();
  const notification = useSelector((state) => state.notificationReducer);
  const notifyArray = useSelector((state) => state.notifyArrayReducer);
  console.log(notifyArray);

  const handleClose = () => dispatch(asyncNotification(false));

  useEffect(() => {
    dispatch(asyncGetNotifyArray());
  }, []);

  return (
    <Box>
      <Menu
        PaperProps={{
          style: {
            width: 264,
          },
        }}
        sx={{ m: 1 }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        MenuListProps={{
          "aria-labelledby": "notification-button",
        }}
        onClose={handleClose}
        open={notification}
        anchorEl={anchorEl}
        id="notification-menu"
      >
        <MenuItem sx={{ bgcolor: "#FAFAFA", p: 1, borderRadius: 3 }}>
          <Typography pl={9}>Notifications</Typography>
        </MenuItem>

        {notifyArray == 0 && (
          <MenuItem>
            <Typography color="text.secondary">No new Notifications</Typography>
          </MenuItem>
        )}

        {"success" in notifyArray &&
          notifyArray.success.map((item) => (
            <MenuItem sx={{ mt: 0 }} onClick={handleClose}>
              <Typography
                mr={1}
                color="info.main"
              >{`${item.content}`}</Typography>
            </MenuItem>
          ))}
      </Menu>
    </Box>
  );
}
