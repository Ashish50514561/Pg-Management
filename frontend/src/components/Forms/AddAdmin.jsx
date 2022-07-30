import React from "react";
import CallIcon from "@mui/icons-material/Call";
import { useState, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { asyncSnackbar } from "../../Redux/Actions/snackbarActions";
import { asyncLoadAdminData } from "../../Redux/Actions/adminAction";
import {
  asyncGetAdmin,
  asyncUpdateAdmin,
  asyncPostAdmin,
} from "../../Redux/Actions/adminAction";

import {
  Stack,
  TextField,
  Box,
  Grid,
  Paper,
  Button,
  Typography,
} from "@mui/material";

export default function AddAdmin() {
  const [resetFields, setResetFields] = useState(false);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const admin = useSelector((state) => state.adminReducer);
  console.log({ admin });

  const handleSignupErrors = () => {
    if (admin.hasOwnProperty("success")) {
      setResetFields(true);
      // console.log(admin);
      dispatch(asyncSnackbar(true));
    } else if (admin.hasOwnProperty("error")) {
      setResetFields(false);
      console.log(admin.failure);
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

  const helper = (error) => {
    return <span style={{ color: "red" }}>{error}</span>;
  };

  const initialValues = {
    name: admin.update === true && "success" in admin ? admin.success.name : "",
    email:
      admin.update === true && "success" in admin ? admin.success.email : "",
    password: "",
    confirmPassword: "",
    age: admin.update === true && "success" in admin ? admin.success.age : "",
    address:
      admin.update === true && "success" in admin ? admin.success.address : "",
    image: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Required!")
      .min(3, "Min words 3")
      .max(20, "Max words 20"),
    email: Yup.string()
      .email("Invalid email")
      .required("Required"),
    address: Yup.string()
      .required("Required!")
      .max(50, "Max 50 words"),
    password: Yup.string()
      .matches(
        /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
        "Min length 8,must have uppercase,lowercase,number & symbol"
      )
      .required("Required!"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "passwords must match")
      .required("Confirm your password"),
    age: Yup.number()
      .required("Required")
      .min(1, "min 1")
      .max(100, "max 100"),
  });

  const onSubmit = (values, onSubmitProps) => {
    localStorage.setItem("values", JSON.stringify(values));
    if (admin.update == false) {
      dispatch(asyncPostAdmin(values));
    } else {
      dispatch(asyncUpdateAdmin(values));
      dispatch(asyncLoadAdminData(false));
    }
    onSubmitProps.setSubmitting(false);
    onSubmitProps.resetForm();
  };

  useEffect(() => {
    handleSignupErrors();
    dispatch(asyncGetAdmin());
  }, []);

  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      p={3}
      sx={{ minHeight: "50%", px: { xs: 2, sm: 8, md: 15, lg: 12 } }}
    >
      <Grid item xs={12} sm={12} lg={6}>
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
                      // alignItems="center"
                      spacing={2}
                      sx={{
                        // p: { xs: 1 },
                        // width: { xs: 250, sm: 350, md: 350 },
                        position: "relative",
                      }}
                    >
                      <Field name="name">
                        {(props) => {
                          const { field, meta } = props;

                          return (
                            <TextField
                              label={star("User name")}
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
                              label={star("Email")}
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

                      <Field name="password">
                        {(props) => {
                          const { field, meta } = props;

                          return (
                            <TextField
                              {...field}
                              type="password"
                              label={star("Password")}
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

                      <Field name="confirmPassword">
                        {(props) => {
                          const { field, meta } = props;

                          return (
                            <TextField
                              {...field}
                              type="password"
                              label={star("confirm password")}
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
                          const { field, meta } = props;

                          return (
                            <TextField
                              {...field}
                              // type="file"
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
                          type="submit"
                          variant="outlined"
                          onClick={() => {
                            dispatch(asyncLoadAdminData(false));
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
            p={5}
            // pb={20}
            sx={{ height: 500, borderRadius: 2 }}
          >
            <Stack sx={{ width: { xs: 250, sm: 350, md: 350 } }}>
              <Typography color="white" variant="h4">
                Admin
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
