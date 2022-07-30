import React from "react";
import { Link } from "react-router-dom";
import { Grid, Stack, Rating, Box, CardActions, Button } from "@mui/material";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";

export default function B_Card(props) {
  const { _id, buildingName, rooms, address, rating, image } = props;

  return (
    <Grid m="auto" item sm={6} md={4} lg={4}>
      <Stack borderRadius={2} p={{ xs: 0.5, lg: 1.5 }}>
        <Card>
          <CardMedia
            sx={{ height: 180 }}
            component="img"
            image={image}
            alt=" image.."
          />

          <CardContent>
            <Grid container>
              <Grid aria-label="buildingName" item lg={7}>
                <Box>
                  <Typography color="primary.main" variant="h6">
                    {buildingName}
                  </Typography>
                </Box>
              </Grid>

              <Grid aria-label="rating" item lg={5}>
                <Box ml={{ xs: 12, sm: 0 }} mt={0.5}>
                  <Rating size="small" name="Rating" value={rating} />
                </Box>
              </Grid>

              <Grid aria-label="rooms" item xs={6} lg={8}>
                <Box>
                  <Typography variant="h6" color="text.secondary">
                    Rooms
                  </Typography>
                </Box>
              </Grid>

              <Grid aria-label="rooms" item xs={6} lg={4}>
                <Box>
                  <Typography color="text.secondary" variant="h6">
                    {rooms}
                  </Typography>
                </Box>
              </Grid>

              <Grid item aria-label="rent" xs={6} lg={8}>
                <Box>
                  <Typography variant="h6" color="text.secondary">
                    Monthly-Rent
                  </Typography>
                </Box>
              </Grid>

              <Grid item aria-label="rent" xs={6} lg={4}>
                <Box>
                  <Typography color="text.secondary" variant="h6">
                    Rs.2500
                  </Typography>
                </Box>
              </Grid>

              <Grid item aria-label="rent" xs={6} lg={8}>
                <Box>
                  <Typography color="text.secondary" variant="h6">
                    ISO Certified
                  </Typography>
                </Box>
              </Grid>

              <Grid item aria-label="rent" xs={6} lg={4}>
                <Box>
                  <Typography color="text.secondary" variant="h6">
                    100%
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </CardContent>

          <CardActions>
            <Link to={`/building/${_id}`}>
              <Button> Explore more..</Button>
            </Link>
          </CardActions>
        </Card>
      </Stack>
    </Grid>
  );
}
