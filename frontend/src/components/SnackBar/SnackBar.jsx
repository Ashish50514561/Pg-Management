import React from "react";
import { Alert, Snackbar } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { asyncSnackbar } from "../../Redux/Actions/snackbarActions";

export default function SnackBar() {
  const dispatch = useDispatch();

  const snackbar = useSelector((state) => state.snackbarReducer);

  const handleClose = () => {
    dispatch(asyncSnackbar(false));
  };

  return (
    <>
      <Snackbar
        // message="Success!"
        autoHideDuration={2500}
        open={snackbar}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "center",
          horizontal: "center",
        }}
      >
        <Alert onClose={handleClose} severity="success">
          Success!
        </Alert>
      </Snackbar>
    </>
  );
}
