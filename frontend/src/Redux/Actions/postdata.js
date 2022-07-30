import axios from "axios";
export const asyncPostData = (mainUrl, Formdata) => {
  return async (dispatch) => {
    if (mainUrl.hasOwnProperty("header")) {
      try {
        const response = await axios.post(
          mainUrl.url,
          Formdata,
          mainUrl.header
        );
        const data = response.data;
        if (response.data.hasOwnProperty("success")) {
          dispatch(postSuccess(data.success));
        } else {
          dispatch(postFailure(data.error));
        }
      } catch (err) {
        postFailure(err);
      }
    } else {
      try {
        const response = await axios.post(mainUrl, Formdata);
        const data = response.data;
        if (response.data.hasOwnProperty("successToken")) {
          localStorage.setItem("token", response.data.successToken);
          dispatch(postSuccess(data.successToken));
        } else if (response.data.hasOwnProperty("success")) {
          dispatch(postSuccess(data.success));
        } else {
          dispatch(postFailure(data.error));
        }
      } catch (err) {
        postFailure(err);
      }
    }
  };
};

const postSuccess = (response) => {
  return {
    type: "POST_DATA_SUCCESS",
    payload: response,
  };
};

const postFailure = (err) => {
  return {
    type: "POST_DATA_FAILURE",
    payload: err,
  };
};
