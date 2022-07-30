import React from "react";
import { useState, useEffect } from "react";
import CallIcon from "@mui/icons-material/Call";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import { asyncLogin } from "../../Redux/Actions/adminAction";
import { useNavigate } from "react-router-dom";
import { asyncSnackbar } from "../../Redux/Actions/snackbarActions";
import {
  Stack,
  TextField,
  Box,
  Grid,
  Paper,
  Button,
  Typography,
} from "@mui/material";

export default function Adminlogin() {
  const [error, setError] = useState("");
  const [resetFields, setResetFields] = useState(false);
  console.log({ error });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginState = useSelector((state) => state.adminReducer);
  console.log({ loginState });

  const handleLoginErrors = () => {
    const token = localStorage.getItem("token");
    if (
      loginState.hasOwnProperty("success") &&
      loginState.success.hasOwnProperty("successToken") &&
      token
    ) {
      setResetFields(true);
      console.log("hello");
      navigate("/");
      dispatch(asyncSnackbar(true));
    } else {
      setResetFields(false);
      setError(loginState.fail);
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
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().required("Required"),
    password: Yup.string().required("Required!"),
  });

  const onSubmit = (values, { resetForm }) => {
    setResetFields(false);
    dispatch(asyncLogin(values));
    resetFields && resetForm({ values: "" });
  };

  useEffect(() => {
    handleLoginErrors();
  }, [loginState]);

  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      p={5}
      sx={{ minHeight: "50%", px: { xs: 2, sm: 8, md: 15, lg: 12 } }}
    >
      <Grid item xs={12} sm={12} lg={6}>
        <Paper elevation={2}>
          <Stack
            sx={{
              maxHeight: "100",
              overflow: "auto",

              height: 420,
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
                      <Field name="email">
                        {(props) => {
                          const { field, meta } = props;
                          return (
                            <TextField
                              {...field}
                              label={star("Email id")}
                              variant="standard"
                              sx={{ width: "85%" }}
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
                              sx={{ width: "85%" }}
                              helperText={
                                meta.touched && meta.error
                                  ? helper(meta.error)
                                  : null
                              }
                            />
                          );
                        }}
                      </Field>

                      {error && <span style={{ color: "red" }}>{error}</span>}

                      <Box mt={2}>
                        <Button
                          disabled={!formik.isValid}
                          type="submit"
                          variant="contained"
                        >
                          Login
                        </Button>
                      </Box>
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
            sx={{ height: 420, borderRadius: 2 }}
          >
            <Stack sx={{ width: { xs: 250, sm: 350, md: 350 } }}>
              <Typography color="white" variant="h4">
                Login Form
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
