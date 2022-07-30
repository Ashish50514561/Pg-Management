import React from "react";
import CallIcon from "@mui/icons-material/Call";
import { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { asyncGetBuildings } from "../../Redux/Actions/buildingAction";
import {
  asyncPostTenant,
  asyncGetTenants,
} from "../../Redux/Actions/tenantAction";
import { useNavigate } from "react-router-dom";
import { asyncSnackbar } from "../../Redux/Actions/snackbarActions";
import { asyncPostNotifyArray } from "../../Redux/Actions/notifyArrayAction";
import { asyncNotificationCount } from "../../Redux/Actions/notificationCountAction";
import { asyncGetNotifyArray } from "../../Redux/Actions/notifyArrayAction";
import {
  Stack,
  TextField,
  Box,
  Grid,
  Paper,
  Button,
  Typography,
  InputAdornment,
  MenuItem,
} from "@mui/material";

export default function AddTenant() {
  const [loadData, setLoadData] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const buildings = useSelector((state) => state.buildingReducer);
  const tenant = useSelector((state) => state.tenantReducer);

  const helper = (error) => {
    return <span style={{ color: "red" }}>{error}</span>;
  };

  const handleTenantErrors = () => {
    if ("success" in tenant) {
      console.log({ tenant });
    } else {
      setLoadData(JSON.parse(localStorage.getItem("values")));
      console.log(tenant.failure);
    }
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
    name: loadData ? loadData.name : "",
    email: loadData ? loadData.email : "",
    mobile: loadData ? loadData.mobile : "",
    age: loadData ? loadData.age : "",
    adhaar: loadData ? loadData.adhaar : "",
    buildingId: "",
    roomNumber: loadData ? loadData.roomNumber : "",
    paidTill: loadData ? loadData.paidTill : "",
    address: loadData ? loadData.address : "",
    image: loadData ? loadData.image : "",
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Required!")
      .min(3, "Min words 3")
      .max(20, "Max words 20"),
    email: Yup.string()
      .email("Invalid email")
      .required("Required"),
    mobile: Yup.string()
      .typeError("only numbers are allowed")
      .required("Required!")
      .matches(/^((\+91)?|91)?[789][0-9]{9}/, "enter a valid number"),
    age: Yup.number()
      .required("Required")
      .min(1, "min age 1")
      .max(100, "max age 100"),
    adhaar: Yup.string()
      .typeError("only numbers are allowed")
      .required("Required!")
      .matches(/^[2-9]{1}\d{3}[\s-]?\d{4}[\s-]?\d{4}$/, "not a valid adhaar"),
    buildingId: Yup.string().required("Required!"),
    roomNumber: Yup.number()
      .required("Required")
      .min(1, "min 1")
      .max(50, "max 50"),
    paidTill: Yup.date().required("Required"),

    address: Yup.string()
      .required("Required!")
      .max(50, "Max 50 words"),
  });

  const onSubmit = async (values, onSubmitProps) => {
    localStorage.setItem("values", JSON.stringify(values));
    console.log({ values });
    const formData = new FormData();

    for (const value in values) {
      formData.append(value, values[value]);
    }

    dispatch(asyncPostTenant(formData));
    onSubmitProps.setSubmitting(false);
    dispatch(asyncPostNotifyArray({ note: `Tenant added,${values.name}` }));
    dispatch(asyncNotificationCount(1));
    onSubmitProps.resetForm();
    dispatch(asyncSnackbar(true));
    dispatch(asyncGetTenants(values));
    dispatch(asyncGetNotifyArray());
  };

  useEffect(() => {
    dispatch(asyncGetBuildings());
  }, []);

  useEffect(() => {
    handleTenantErrors();
  }, [tenant]);

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
                  <Form>
                    <Stack
                      pl={{ xs: 4, lg: 4 }}
                      pt={{ xs: 3, lg: 3 }}
                      justifyContent="center"
                      spacing={2}
                      sx={{
                        position: "relative",
                      }}
                    >
                      <Field name="name">
                        {(props) => {
                          const { field, meta } = props;

                          return (
                            <TextField
                              label={star("Tenants Name")}
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

                      <Field name="email">
                        {(props) => {
                          const { field, meta } = props;
                          return (
                            <TextField
                              {...field}
                              label={star("Email id")}
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

                      <Field name="age">
                        {(props) => {
                          const { field, meta } = props;

                          return (
                            <TextField
                              {...field}
                              label={star("Age")}
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

                      <Field name="mobile">
                        {(props) => {
                          const { field, meta } = props;

                          return (
                            <TextField
                              {...field}
                              label={star("Mobile")}
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

                      <Field name="adhaar">
                        {(props) => {
                          const { field, meta } = props;

                          return (
                            <TextField
                              {...field}
                              label={star("Adhaar no.")}
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

                      <Field name="buildingId">
                        {(props) => {
                          const { field, meta } = props;

                          return (
                            <TextField
                              {...field}
                              label={star("Select Building ")}
                              variant="standard"
                              sx={{ width: "75%" }}
                              helperText={
                                meta.touched && meta.error
                                  ? helper(meta.error)
                                  : null
                              }
                              id="select"
                              select
                            >
                              {buildings.hasOwnProperty("success") &&
                                buildings.success.map((building) => {
                                  return (
                                    <MenuItem value={building._id}>
                                      {building.buildingName}
                                    </MenuItem>
                                  );
                                })}
                              {/* <MenuItem value="hello">Hello</MenuItem> */}
                            </TextField>
                          );
                        }}
                      </Field>

                      <Field name="roomNumber">
                        {(props) => {
                          const { field, meta } = props;

                          return (
                            <TextField
                              {...field}
                              label={star("Room no.")}
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

                      <Field name="paidTill">
                        {(props) => {
                          const { field, meta } = props;

                          return (
                            <TextField
                              {...field}
                              type="date"
                              // label={star("Paid Till")}
                              variant="standard"
                              InputProps={{
                                endAdornment: (
                                  <InputAdornment position="end">
                                    Paid Till
                                  </InputAdornment>
                                ),
                              }}
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
                              {...field}
                              label={star("Address")}
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
                          const { field, meta, form } = props;

                          return (
                            <TextField
                              // {...field}
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
                              label={star("Image")}
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
                Add Tenant
              </Typography>
              <Typography mt={3} color="white" variant="h6">
                PG- Management App is a really great option to maintain all your
                hostels.It helps you with many functionalities to easily
                accomodate to growing market and challenging bussiness tasks.
              </Typography>
              <Typography mt={4}>
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
