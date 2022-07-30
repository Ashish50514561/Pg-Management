import axios from "axios";

export const asyncGetBuildings = () => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    if (token) {
      const response = await axios.get("http://localhost:3001/building", {
        headers: {
          Authorization: token,
        },
      });
      response.data.hasOwnProperty("success")
        ? dispatch(getDataSuccess(response.data))
        : dispatch(getDataFailure(response.data));
    }
  };
};

// export const asyncGetBuildingById = (id) => {
//   return async (dispatch) => {
//     const token = localStorage.getItem("token");
//     const response = await axios.get(`http://localhost:3001/building/${id}`, {
//       headers: {
//         Authorization: token,
//       },
//     });
//     response.data.hasOwnProperty("success")
//       ? dispatch(getDataSuccess(response.data))
//       : dispatch(getDataFailure(response.data));
//   };
// };

export const asyncPostBuilding = (formData) => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    if (token) {
      const response = await axios.post(
        "http://localhost:3001/building",
        formData,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      response.data.hasOwnProperty("success")
        ? dispatch(getDataSuccess(response.data))
        : dispatch(getDataFailure(response.data));
    }
  };
};

export const asyncUpdateBuilding = (id) => {
  return async (dispatch) => {
    const response = await axios.post(`http://localhost:3001/building/${id}`);
    response.data.hasOwnProperty("success")
      ? dispatch(getDataSuccess(response.data))
      : dispatch(getDataFailure(response.data));
  };
};

export const asyncDeleteBuilding = (id) => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    if (token) {
      const response = await axios.delete(
        `http://localhost:3001/building/${id}`,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      response.data.hasOwnProperty("success")
        ? dispatch(getDataSuccess(response.data))
        : dispatch(getDataFailure(response.data));
    }
  };
};

const getDataSuccess = (response) => {
  return {
    type: "BUILDING_SUCCESS",
    payload: response,
  };
};

const getDataFailure = (error) => {
  return {
    type: "BUILDING_FAILURE",
    payload: error,
  };
};
