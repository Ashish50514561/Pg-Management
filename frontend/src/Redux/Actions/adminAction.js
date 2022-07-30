import axios from "axios";

export const asyncLogin = (formData) => {
  return async (dispatch) => {
    const response = await axios.post(
      "http://localhost:3001/admin/login",
      formData
    );
    if (response.data.hasOwnProperty("successToken")) {
      localStorage.setItem("token", response.data.successToken);
      dispatch(reqSuccess(response.data));
    } else {
      dispatch(reqFailure(response.data.error));
    }
  };
};

export const asyncPostAdmin = (formData) => {
  return async (dispatch) => {
    const response = await axios.post("http://localhost:3001/admin", formData);
    if (response.data.hasOwnProperty("success")) {
      dispatch(reqSuccess(response.data));
    } else {
      dispatch(reqFailure(response.data.error));
    }
  };
};

export const asyncUpdateAdmin = (formData) => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    if (token) {
      const response = await axios.post(
        "http://localhost:3001/admin/update",
        formData,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      if (response.data.hasOwnProperty("success")) {
        dispatch(reqSuccess(response.data));
      } else {
        dispatch(reqFailure(response.data.error));
      }
    }
  };
};

export const asyncGetAdmin = (formData) => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    if (token) {
      const response = await axios.get("http://localhost:3001/admin", {
        headers: {
          Authorization: token,
        },
      });
      if (response.data.hasOwnProperty("success")) {
        dispatch(reqSuccess(response.data.success));
      } else {
        dispatch(reqFailure(response.data.success));
      }
    }
  };
};

export const asyncLoadAdminData = (value) => {
  return (dispatch) => {
    dispatch(getAdmin(value));
  };
};

const reqSuccess = (response) => {
  return {
    type: "ADMIN_SUCCESS",
    payload: response,
  };
};
const reqFailure = (error) => {
  return {
    type: "ADMIN_FAIL",
    payload: error,
  };
};
const getAdmin = (value) => {
  return {
    type: "UPDATE_TRUE",
    payload: value,
  };
};
