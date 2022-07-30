import { useSelector, useDispatch } from "react-redux";
import { asyncModal } from "../../Redux/Actions/ModalAction";
import { asyncSnackbar } from "../../Redux/Actions/snackbarActions";
import { asyncDeleteBuilding } from "../../Redux/Actions/buildingAction";
import { useNavigate } from "react-router-dom";
import React from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import {
  asyncDeleteTenants,
  asyncGetTenants,
} from "../../Redux/Actions/tenantAction";
import { Navigate } from "react-router-dom";

export default function Modal(props) {
  console.log("modal", props);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.modalReducer);
  const modalData = useSelector((state) => state.modalDataReducer);

  console.log("saala", modalData);
  const handleDelete = () => {
    if (modalData.hasOwnProperty("building")) {
      dispatch(
        asyncDeleteBuilding(
          modalData.hasOwnProperty("building") && modalData.building
        )
      );

      dispatch(asyncModal(false));
      dispatch(asyncSnackbar(true));
      navigate(-1);
    } else {
      dispatch(asyncDeleteTenants(modalData));
      dispatch(asyncModal(false));
      dispatch(asyncSnackbar(true));
      dispatch(asyncGetTenants());
    }
  };

  return (
    <div>
      <Dialog
        open={modal}
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
      >
        <DialogTitle id="dialog-title">Remove selected records?</DialogTitle>

        <DialogContent>
          <DialogContentText id="dialog-description">
            You won't be able to recover records once you confirm!
          </DialogContentText>
        </DialogContent>

        <DialogActions>
          <Button onClick={() => dispatch(asyncModal(false))}>Cancel</Button>
          <Button autoFocus onClick={handleDelete}>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
