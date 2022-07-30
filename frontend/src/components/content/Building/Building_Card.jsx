import React from "react";
import { useEffect } from "react";
import MapsHomeWorkIcon from "@mui/icons-material/MapsHomeWork";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import NotListedLocationIcon from "@mui/icons-material/NotListedLocation";
import GradeIcon from "@mui/icons-material/Grade";
import AddLocationAltRoundedIcon from "@mui/icons-material/AddLocationAltRounded";
import { asyncGetBuildings } from "../../../Redux/Actions/buildingAction";
import { useSelector, useDispatch } from "react-redux";
import Carousel_ from "./Carousel_";
import { asyncModal } from "../../../Redux/Actions/ModalAction";
import { asyncmodalData } from "../../../Redux/Actions/modalData";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  Button,
  Grid,
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Stack,
  Typography,
  Rating,
  IconButton,
} from "@mui/material";

export default function Building_Card(props) {
  const { id } = props;
  const dispatch = useDispatch();
  const buildings = useSelector((state) => state.buildingReducer);

  const images = [
    "https://www.sustainableplaces.eu/wp-content/uploads/2017/02/SmartBuilding.jpg",
    "data:image/jpeg;base64,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",
  ];

  const building =
    "success" in buildings &&
    buildings.success.filter((building) => building._id == id);

  const buildingId = { building: id };

  const handleDelete = () => {
    dispatch(asyncModal(true));
    dispatch(asyncmodalData(buildingId));
  };

  useEffect(() => {
    dispatch(asyncGetBuildings());
  }, []);

  return (
    <Grid container mt={3} item lg={12}>
      <Grid item xs={12} md={6} lg={7}>
        <Box pt={0.5}>
          <Carousel_ />
        </Box>
      </Grid>

      <Grid
        bgcolor="white"
        height={{ xs: "50%", md: "100%" }}
        item
        xs={12}
        md={6}
        lg={5}
        sx={{ boxShadow: 1 }}
        borderRadius={1}
      >
        <Stack direction row height="100%" pt={{ xs: 1 }}>
          <Box>
            <List>
              <ListItem araia-label="name">
                <ListItemIcon sx={{ minWidth: "35px" }}>
                  <MapsHomeWorkIcon color="primary" />
                </ListItemIcon>
                <ListItemText>
                  <Typography color="primary.main" variant="h7">
                    Building
                  </Typography>
                </ListItemText>
              </ListItem>

              <ListItem arai-label="room">
                <ListItemIcon sx={{ minWidth: "35px" }}>
                  <AccountBalanceIcon color="primary" />
                </ListItemIcon>
                <ListItemText>
                  <Typography color="primary.main" variant="h7">
                    Rooms
                  </Typography>
                </ListItemText>
              </ListItem>

              <ListItem aria-label="landmark">
                <ListItemIcon sx={{ minWidth: "35px" }}>
                  <NotListedLocationIcon color="primary" />
                </ListItemIcon>
                <ListItemText>
                  <Typography color="primary.main" variant="h7">
                    Landmark
                  </Typography>
                </ListItemText>
              </ListItem>

              <ListItem aria-label="Rating">
                <ListItemIcon sx={{ minWidth: "35px" }}>
                  <GradeIcon color="primary" />
                </ListItemIcon>
                <ListItemText>
                  <Typography color="primary.main" variant="h7">
                    Rating
                  </Typography>
                </ListItemText>
              </ListItem>

              <ListItem aria-label="address">
                <Box pt={1}>
                  <ListItemIcon sx={{ minWidth: "35px" }}>
                    <AddLocationAltRoundedIcon color="primary" />
                  </ListItemIcon>
                </Box>
                <ListItemText>
                  <Box pt={1}>
                    <Typography color="primary.main" variant="h7">
                      Address
                    </Typography>
                  </Box>
                </ListItemText>
              </ListItem>
            </List>

            <Button
              endIcon={<DeleteIcon />}
              sx={{
                whiteSpace: "nowrap",
                minWidth: "max-content",
                m: 2.5,
              }}
              color="primary"
              variant="contained"
              onClick={handleDelete}
            >
              Remove
            </Button>
          </Box>

          <Box aria-label="field-data">
            <List>
              <ListItem>
                <ListItemText>
                  <Typography color="text.secondary" variant="h7">
                    {building && building[0].buildingName}
                  </Typography>
                </ListItemText>
              </ListItem>

              <ListItem>
                <ListItemText>
                  <Typography color="text.secondary" variant="h7">
                    {building && building[0].rooms}
                  </Typography>
                </ListItemText>
              </ListItem>

              <ListItem>
                <ListItemText>
                  <Typography color="text.secondary" variant="h7">
                    {building && building[0].landmark}
                  </Typography>
                </ListItemText>
              </ListItem>

              <ListItem>
                <ListItemText>
                  <Rating
                    size="small"
                    name="Rating"
                    value={building && building[0].rating}
                  />
                </ListItemText>
              </ListItem>

              <ListItem>
                <ListItemText>
                  <Typography
                    color="text.secondary"
                    sx={{ wordBreak: "break-word" }}
                    variant="h7"
                  >
                    {building && building[0].address}
                  </Typography>
                </ListItemText>
              </ListItem>
            </List>
          </Box>
        </Stack>
      </Grid>
    </Grid>
  );
}
