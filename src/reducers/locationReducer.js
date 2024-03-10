import { CHANGE_LOCATION } from "../actions/locationActions";

const initialState = {
  location: "hanoi",
};

const locationReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_LOCATION:
      return {
        ...state,
        location: action.payload,
      };
    default:
      return state;
  }
};

export default locationReducer;
