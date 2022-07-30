import React from "react";
import CallIcon from "@mui/icons-material/Call";
import { useState, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import { useDispatch, useSelector } from "react-redux";
import {
  asyncPostBuilding,
  asyncGetBuildings,
} from "../../Redux/Actions/buildingAction";
import { asyncSnackbar } from "../../Redux/Actions/snackbarActions";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { asyncPostNotifyArray } from "../../Redux/Actions/notifyArrayAction";
import {
  Stack,
  TextField,
  Box,
  Grid,
  Paper,
  Button,
  Typography,
} from "@mui/material";

export default function AddBuilding() {
  const [loadData, setLoadData] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const buildingState = useSelector((state) => state.buildingReducer);

  const handleBuildingErrors = () => {
    if ("success" in buildingState) {
      console.log({ buildingState });
    } else {
      setLoadData(JSON.parse(localStorage.getItem("values")));
      console.log(buildingState.failure);
    }
  };

  const helper = (error) => {
    return <span style={{ color: "red" }}>{error}</span>;
  };

  const star = (label) => {
    return (
      <span>
        {label}
        <span style={{ color: "red" }}>*</span>
      </span>
    );
  };

  const initialValues = {
    buildingName: loadData ? loadData.buildingName : "",
    rooms: loadData ? loadData.rooms : "",
    address: loadData ? loadData.address : "",
    landmark: loadData ? loadData.landmark : "",
    rating: loadData ? loadData.rating : "",
    image: "",
  };

  const validationSchema = Yup.object({
    buildingName: Yup.string()
      .required("Required!")
      .min(3, "minimum words 3")
      .max(20, "max words 20"),
    rooms: Yup.number()
      .typeError("only numbers are allowed")
      .required("Required!")
      .min(1, "atleast enter 1 room")
      .max(50, "should be less than 50"),

    address: Yup.string()
      .required("Required!")
      .max(50, "max limit 50 words"),
    landmark: Yup.string()
      .required("Required!")
      .min(3, "min length 3")
      .max(15, "max length 15"),
    rating: Yup.number()
      .typeError("only numbers are allowed")
      .required("Required!")
      .max(5, "max limit 5")
      .min(0, "should be greater than 0"),
  });

  const onSubmit = (values, onSubmitProps) => {
    localStorage.setItem("values", JSON.stringify(values));
    let formData = new FormData();
    for (const value in values) {
      formData.append(value, values[value]);
    }

    for (const key of formData.entries()) {
      console.log(key[0], key[1]);
    }

    dispatch(asyncPostBuilding(formData));
    onSubmitProps.setSubmitting(false);
    dispatch(asyncPostNotifyArray(`Building added,${values.buildingName}`));

    onSubmitProps.resetForm();
    dispatch(asyncSnackbar(true));
    dispatch(asyncGetBuildings(values));
  };

  useEffect(() => {
    handleBuildingErrors();
  }, [buildingState]);

  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      p={5}
      sx={{ minHeight: "50%", px: { xs: 2, sm: 5, md: 0.5, lg: 12 } }}
    >
      <Grid item xs={12} sm={12} md={6}>
        <Paper elevation={2}>
          <Stack
            sx={{
              maxHeight: "100",
              overflow: "auto",
              height: 500,
              borderRadius: 2,
            }}
          >
            <Formik
              validationSchema={validationSchema}
              initialValues={initialValues}
              onSubmit={onSubmit}
            >
              {(formik) => {
                return (
                  <Form
                  // action="/profile"
                  // method="post"
                  // enctype="multipart/form-data"
                  >
                    <Stack
                      pl={{ xs: 4, lg: 4 }}
                      pt={{ xs: 3, lg: 3 }}
                      justifyContent="center"
                      spacing={2}
                      sx={{
                        position: "relative",
                      }}
                    >
                      <Field name="buildingName">
                        {(props) => {
                          console.log("props", props);
                          const { field, meta } = props;
                          return (
                            <TextField
                              label={star("Building name")}
                              variant="standard"
                              sx={{ width: "75%" }}
                              {...field}
                              helperText={
                                meta.touched && meta.error
                                  ? helper(meta.error)
                                  : null
                              }
                            />
                          );
                        }}
                      </Field>

                      <Field name="rooms">
                        {(props) => {
                          const { field, meta } = props;
                          return (
                            <TextField
                              label={star("Rooms")}
                              {...field}
                              variant="standard"
                              sx={{ width: "75%" }}
                              helperText={
                                meta.touched && meta.error
                                  ? helper(meta.error)
                                  : null
                              }
                            />
                          );
                        }}
                      </Field>

                      <Field name="address">
                        {(props) => {
                          const { field, meta } = props;

                          return (
                            <TextField
                              label={star("Address")}
                              {...field}
                              variant="standard"
                              sx={{ width: "75%" }}
                              helperText={
                                meta.touched && meta.error
                                  ? helper(meta.error)
                                  : null
                              }
                            />
                          );
                        }}
                      </Field>

                      <Field name="landmark">
                        {(props) => {
                          const { field, meta } = props;

                          return (
                            <TextField
                              label={star("landmark")}
                              {...field}
                              variant="standard"
                              sx={{ width: "75%" }}
                              helperText={
                                meta.touched && meta.error
                                  ? helper(meta.error)
                                  : null
                              }
                            />
                          );
                        }}
                      </Field>

                      <Field name="rating">
                        {(props) => {
                          const { field, meta } = props;

                          return (
                            <TextField
                              label={star("Rating")}
                              {...field}
                              type="number"
                              variant="standard"
                              sx={{ width: "75%" }}
                              helperText={
                                meta.touched && meta.error
                                  ? helper(meta.error)
                                  : null
                              }
                            />
                          );
                        }}
                      </Field>

                      <Field name="image">
                        {(props) => {
                          const { field, form, meta } = props;
                          console.log(props);

                          return (
                            <TextField
                              id="image"
                              label={star("Image")}
                              onBlur={field.blur}
                              name={field.name}
                              onChange={(e) => {
                                console.log(e.target);
                                form.setFieldValue(
                                  "image",
                                  e.currentTarget.files[0]
                                );
                              }}
                              type="file"
                              variant="standard"
                              sx={{ width: "75%" }}
                              helperText={
                                meta.touched && meta.error
                                  ? helper(meta.error)
                                  : null
                              }
                            />
                          );
                        }}
                      </Field>

                      {/* buttons */}

                      <Stack
                        height={90}
                        pl={{ xs: 3, sm: 2, md: 8 }}
                        bgcolor="white"
                        sx={{ position: "sticky", bottom: 0 }}
                        spacing={1}
                        direction="row"
                        alignItems="center"
                      >
                        <Button
                          variant="outlined"
                          onClick={() => {
                            navigate(-1);
                          }}
                        >
                          cancel
                        </Button>

                        <Button
                          disabled={!formik.isValid}
                          type="submit"
                          variant="contained"
                        >
                          Submit
                        </Button>
                      </Stack>
                    </Stack>
                  </Form>
                );
              }}
            </Formik>
          </Stack>
        </Paper>
      </Grid>

      <Grid
        item
        xs={12}
        sm={12}
        lg={6}
        sx={{ display: { xs: "none", sm: "none ", lg: "block" } }}
      >
        <Paper elevation={2}>
          <Box
            bgcolor="primary.light"
            p={{ md: 1, lg: 5 }}
            // pb={20}
            sx={{ height: 500, borderRadius: 2 }}
          >
            <Stack sx={{ width: { xs: 250, sm: 350, md: 350 } }}>
              <Typography color="white" variant="h4">
                Add Building
              </Typography>
              <Typography mt={3} color="white" variant="h6">
                PG-management App is a really great option to maintain all your
                hostels.It helps easily add your buildings and to easily
                accomodate to growing market and challenging bussiness tasks.
              </Typography>
              <Typography mt={6}>
                <Button
                  color="success"
                  variant="outlined"
                  sx={{
                    color: "white",
                    backgroundCoor: "white",
                    borderColor: "white",
                  }}
                >
                  {<CallIcon />} Contact Us-
                </Button>
              </Typography>
            </Stack>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
}
