import axios from "axios";

export const asyncGetRooms = () => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    if (token) {
      const response = await axios.get("http://localhost:3001/rooms", {
        headers: {
          Authorization: token,
        },
      });
      response.data.hasOwnProperty("success")
        ? dispatch(getRoomSuccess(response.data))
        : dispatch(getRoomFailure(response.data));
    }
  };
};

export const asyncGetRoomsById = (id) => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    if (token) {
      const response = await axios.get(`http://localhost:3001/rooms/${id}`, {
        headers: {
          Authorization: token,
        },
      });
      response.data.hasOwnProperty("success")
        ? dispatch(getRoomSuccess(response.data))
        : dispatch(getRoomFailure(response.data));
    }
  };
};

export const asyncGetAvailableRooms = () => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    if (token) {
      const response = await axios.get("http://localhost:3001/availableRooms", {
        headers: {
          Authorization: token,
        },
      });
      response.data.hasOwnProperty("success")
        ? dispatch(getRoomSuccess(response.data))
        : dispatch(getRoomFailure(response.data));
    }
  };
};

const getRoomSuccess = (response) => {
  return {
    type: "GET_ROOM_SUCCESS",
    payload: response,
  };
};

const getRoomFailure = (response) => {
  return {
    type: "GET_ROOM_FAILURE",
    payload: response,
  };
};
