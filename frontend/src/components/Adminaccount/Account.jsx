import EditIcon from "@mui/icons-material/Edit";
import { asyncLoadAdminData } from "../../Redux/Actions/adminAction";
import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import AddLocationAltRoundedIcon from "@mui/icons-material/AddLocationAltRounded";
import { asyncGetAdmin } from "../../Redux/Actions/adminAction";
import {
  Grid,
  Box,
  Stack,
  Card,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  requirePropFactory,
} from "@mui/material";

export default function() {
  const dispatch = useDispatch();
  const admin = useSelector((state) => state.adminReducer);

  useEffect(() => {
    dispatch(asyncGetAdmin());
  }, []);

  return (
    <Stack height="88.5vh" p={{ md: 2 }} px={{ sm: 2 }}>
      <Grid
        container
        borderRadius={4}
        p={1}
        height="88.5vh"
        bgcolor="white"
        sx={{ boxShadow: 1 }}
      >
        <Grid
          height={{ xs: "50%", md: "100%" }}
          item
          p={{ xs: 1, lg: 3 }}
          md={6}
          xs={12}
        >
          <Stack
            justifyContent="center"
            alignItems="center"
            spacing={15}
            borderRadius={5}
          >
            <Box>
              <Card elevation={0}>
                <CardMedia
                  sx={{
                    borderRadius: "50%",
                    width: "90%",
                    height: 200,
                    m: "auto",
                  }}
                  component="img"
                  image="data:image/jpeg;base64,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"
                  alt="user image.."
                />

                <CardContent>
                  <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={0.5}
                  >
                    <Typography color="text.secondary" pl={1} variant="h6">
                      {admin.hasOwnProperty("success")
                        ? admin.success.name
                        : "hero"}
                    </Typography>

                    <Box mb={1}>
                      <Link
                        to={`/admin/${admin.hasOwnProperty("success") &&
                          admin.success._id}`}
                      >
                        <IconButton
                          size="small"
                          onClick={() => dispatch(asyncLoadAdminData(true))}
                        >
                          <EditIcon
                            color="primary"
                            sx={{ height: "20px", width: "30px" }}
                          />
                        </IconButton>
                      </Link>
                    </Box>
                  </Stack>
                </CardContent>
              </Card>
            </Box>

            <Box
              aria-label="socialIcons"
              sx={{ display: { xs: "none", md: "block" } }}
            >
              <Stack
                spacing={1}
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <FacebookIcon
                  color="primary"
                  sx={{ height: "60px", width: "30px" }}
                />
                <InstagramIcon
                  sx={{ height: "60px", width: "30px", color: "#ED9D08" }}
                />
                <TwitterIcon
                  color="primary"
                  sx={{ height: "60px", width: "30px" }}
                />
                <SmartDisplayIcon
                  sx={{ height: "60px", width: "30px", color: "red" }}
                />
              </Stack>
            </Box>
          </Stack>
        </Grid>

        <Grid height={{ xs: "50%", md: "100%" }} item xs={12} md={6}>
          <Stack direction row height="100%" pt={{ xs: 1, md: 6 }}>
            <Box>
              <List>
                <ListItem araia-label="name">
                  <ListItemIcon sx={{ minWidth: "35px" }}>
                    <PersonIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography color="primary.main" variant="h7">
                      Name
                    </Typography>
                  </ListItemText>
                </ListItem>

                <ListItem arai-label="email">
                  <ListItemIcon sx={{ minWidth: "35px" }}>
                    <EmailIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography color="primary.main" variant="h7">
                      Email
                    </Typography>
                  </ListItemText>
                </ListItem>

                <ListItem aria-label="age">
                  <ListItemIcon sx={{ minWidth: "35px" }}>
                    <VerifiedUserIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography color="primary.main" variant="h7">
                      Age
                    </Typography>
                  </ListItemText>
                </ListItem>

                <ListItem aria-label="password">
                  <ListItemIcon sx={{ minWidth: "35px" }}>
                    <LockIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography color="primary.main" variant="h7">
                      Password
                    </Typography>
                  </ListItemText>
                </ListItem>

                <ListItem aria-label="address">
                  <ListItemIcon sx={{ minWidth: "35px" }}>
                    <AddLocationAltRoundedIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography color="primary.main" variant="h7">
                      Address
                    </Typography>
                  </ListItemText>
                </ListItem>

                <ListItem aria-label="verified user">
                  <ListItemIcon sx={{ minWidth: "35px" }}>
                    <VerifiedUserIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography color="primary.main" variant="h7">
                      Verified user
                    </Typography>
                  </ListItemText>
                </ListItem>
              </List>
            </Box>

            <Box aria-label="field-data">
              <List>
                <ListItem aria-label="name">
                  <ListItemText>
                    <Typography color="text.secondary" variant="h7">
                      {admin.hasOwnProperty("success")
                        ? admin.success.name
                        : "username"}
                    </Typography>
                  </ListItemText>
                </ListItem>

                <ListItem aria-label="email">
                  <ListItemText>
                    <Typography color="text.secondary" variant="h7">
                      {admin.hasOwnProperty("success")
                        ? admin.success.email
                        : "useremail"}
                    </Typography>
                  </ListItemText>
                </ListItem>

                <ListItem aria-label="age">
                  <ListItemText>
                    <Typography color="text.secondary" variant="h7">
                      {admin.hasOwnProperty("success")
                        ? admin.success.age
                        : "age"}
                    </Typography>
                  </ListItemText>
                </ListItem>

                <ListItem aria-label="password ">
                  <ListItemText>
                    <Typography color="text.secondary" variant="h7">
                      xxxxxxxxx
                    </Typography>
                  </ListItemText>
                </ListItem>

                <ListItem aria-label="address">
                  <ListItemText>
                    <Typography color="text.secondary" variant="h7">
                      {admin.hasOwnProperty("success")
                        ? admin.success.address
                        : "userAddress"}
                    </Typography>
                  </ListItemText>
                </ListItem>

                <ListItem aria-label="varified">
                  <ListItemText>
                    <Typography color="text.secondary" variant="h7">
                      Verified
                    </Typography>
                  </ListItemText>
                </ListItem>
              </List>
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  );
}
