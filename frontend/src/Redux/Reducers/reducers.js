const sidebarInitialState = false;

export const sidebarReducer = (state = sidebarInitialState, action) => {
  switch (action.type) {
    case "SHOWSIDEBAR": {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

const buildingDataInitialState = {};

export const buildingReducer = (state = buildingDataInitialState, action) => {
  switch (action.type) {
    case "BUILDING_SUCCESS": {
      return action.payload;
    }
    case "BUILDING_FAILURE": {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

const adminInitialState = {
  update: false,
};

export const adminReducer = (state = adminInitialState, action) => {
  switch (action.type) {
    case "ADMIN_SUCCESS": {
      return { ...state, success: action.payload };
    }
    case "ADMIN_FAIL": {
      return { ...state, fail: action.payload };
    }
    case "UPDATE_TRUE": {
      return { ...state, update: action.payload };
    }
    default: {
      return state;
    }
  }
};

const roomsInitialState = {};

export const roomsReducer = (state = roomsInitialState, action) => {
  switch (action.type) {
    case "GET_ROOM_SUCCESS": {
      return action.payload;
    }
    case "GET_ROOM_FAILURE": {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

const tenantInitialState = {};

export const tenantReducer = (state = tenantInitialState, action) => {
  switch (action.type) {
    case "TENANT_REQ_SUCCESS": {
      return action.payload;
    }
    case "TENANT_REQ_FAILURE": {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

const loadingInitialState = true;

export const loadingReducer = (state = loadingInitialState, action) => {
  switch (action.type) {
    case "LOADING_TRUE": {
      return true;
    }
    case "LOADING_FALSE": {
      return false;
    }
    default: {
      return state;
    }
  }
};

const modalInitialState = false;

export const modalReducer = (state = modalInitialState, action) => {
  console.log("hi", action.payload);
  switch (action.type) {
    case "MODAL": {
      return action.payload;
    }

    default: {
      return state;
    }
  }
};

const modalDataInitialState = false;

export const modalDataReducer = (state = modalDataInitialState, action) => {
  switch (action.type) {
    case "DATA": {
      return action.payload;
    }

    default: {
      return state;
    }
  }
};

const snackbarInitialState = false;

export const snackbarReducer = (state = snackbarInitialState, action) => {
  switch (action.type) {
    case "SNACK": {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

const notificationInitialState = false;

export const notificationReducer = (
  state = notificationInitialState,
  action
) => {
  switch (action.type) {
    case "NOTIFICATION": {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

const notifyArrayInitialState = [];

export const notifyArrayReducer = (state = notifyArrayInitialState, action) => {
  console.log("yoooo", action.payload);

  switch (action.type) {
    case "NOTIFICATION_SUCCESS": {
      return action.payload;
    }
    case "NOTIFICATION_FAILURE": {
      return [];
    }
    default: {
      return state;
    }
  }
};

const notificationCountInitialState = [];

export const notificationCountReducer = (
  state = notificationCountInitialState,
  action
) => {
  switch (action.type) {
    case "ADD_COUNT": {
      return [...state, action.payload];
    }
    case "RESET": {
      return [];
    }
    default: {
      return state;
    }
  }
};
