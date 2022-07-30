import { combineReducers } from "redux";
import {
  sidebarReducer,
  buildingReducer,
  adminReducer,
  roomsReducer,
  tenantReducer,
  loadingReducer,
  modalReducer,
  snackbarReducer,
  notificationReducer,
  notifyArrayReducer,
  notificationCountReducer,
  modalDataReducer,
} from "./reducers";

export const rootReducer = combineReducers({
  sidebarReducer,
  buildingReducer,
  adminReducer,
  roomsReducer,
  tenantReducer,
  loadingReducer,
  modalReducer,
  snackbarReducer,
  notificationReducer,
  notifyArrayReducer,
  notificationCountReducer,
  modalDataReducer,
});

export default rootReducer;
