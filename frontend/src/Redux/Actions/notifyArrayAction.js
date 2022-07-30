import axios from "axios";

export const asyncGetNotifyArray = () => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    if (token) {
      const response = await axios.get("http://localhost:3001/notification", {
        headers: {
          Authorization: token,
        },
      });
      response.data.hasOwnProperty("success")
        ? dispatch(getNotifySuccess(response.data))
        : dispatch(getNotifyFailure(response.data));
    }
  };
};

export const asyncPostNotifyArray = (value) => {
  return async (dispatch) => {
    console.log("note", value);
    const token = localStorage.getItem("token");
    if (token) {
      const response = await axios.post(
        "http://localhost:3001/notification",
        value,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      response.data.hasOwnProperty("success")
        ? dispatch(getNotifySuccess(response.data))
        : dispatch(getNotifyFailure(response.data));
    }
  };
};

const getNotifySuccess = (response) => {
  return {
    type: "NOTIFICATION_SUCCESS",
    payload: response,
  };
};

const getNotifyFailure = (error) => {
  return {
    type: "NOTIFICATION_FAILURE",
    payload: error,
  };
};
