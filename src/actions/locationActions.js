export const CHANGE_LOCATION = "CHANGE_LOCATION";

export const changeLocation = (newLocation) => ({
  type: CHANGE_LOCATION,
  payload: newLocation,
});
