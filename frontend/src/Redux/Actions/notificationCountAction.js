export const asyncNotificationCount = (value) => {
  return {
    type: "ADD_COUNT",
    payload: value,
  };
};

export const asyncResetNotificationCount = (value) => {
  return {
    type: "RESET",
    payload: value,
  };
};
