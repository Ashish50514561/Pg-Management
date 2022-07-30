import axios from "axios";

export const asyncPostTenant = (formData) => {
  console.log("hhhhhhhhhhmmmmmmmmmmmmmm");
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    if (token) {
      const response = await axios.post(
        "http://localhost:3001/tenants",
        formData,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      response.data.hasOwnProperty("success")
        ? dispatch(getTenantSuccess(response.data))
        : dispatch(getTenantFailure(response.data));
    }
  };
};

export const asyncUpdateTenant = (formData) => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    if (token) {
      const response = await axios.put(
        "http://localhost:3001/tenants/update",
        formData,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      response.data.hasOwnProperty("success")
        ? dispatch(getTenantSuccess(response.data))
        : dispatch(getTenantFailure(response.data));
    }
  };
};

export const asyncGetTenants = () => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    if (token) {
      const response = await axios.get("http://localhost:3001/tenants", {
        headers: {
          Authorization: token,
        },
      });
      response.data.hasOwnProperty("success")
        ? dispatch(getTenantSuccess(response.data))
        : dispatch(getTenantFailure(response.data));
    }
  };
};

export const asyncGetTenantsByBuilding = (id) => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    if (token) {
      const response = await axios.get(
        `http://localhost:3001/tenants/building/${id}`,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      response.data.hasOwnProperty("success")
        ? dispatch(getTenantSuccess(response.data))
        : dispatch(getTenantFailure(response.data));
    }
  };
};

export const asyncGetTenantsById = (id) => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    if (token) {
      const response = await axios.get(`http://localhost:3001/tenant/${id}`, {
        headers: {
          Authorization: token,
        },
      });
      response.data.hasOwnProperty("success")
        ? dispatch(getTenantSuccess(response.data))
        : dispatch(getTenantFailure(response.data));
    }
  };
};

export const asyncDeleteTenants = (formData) => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    if (token) {
      const response = await axios.delete(
        "http://localhost:3001/tenants/delete",
        {
          headers: {
            Authorization: token,
            Data: formData,
          },
        }
      );
      response.data.hasOwnProperty("success")
        ? dispatch(getTenantSuccess(response.data))
        : dispatch(getTenantFailure(response.data));
    }
  };
};

const getTenantSuccess = (response) => {
  return {
    type: "TENANT_REQ_SUCCESS",
    payload: response,
  };
};
const getTenantFailure = (response) => {
  return {
    type: "TENANT_REQ_FAILURE",
    payload: response,
  };
};
