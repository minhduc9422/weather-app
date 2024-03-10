import React, { createContext, useState } from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import locationReducer from "../reducers/locationReducer";

export const LocationContext = React.createContext();

const store = createStore(locationReducer);

export const LocationProvider = ({ children }) => {
  return (
    <Provider value={store}>
      <LocationContext.Provider value={store}>
        {children}
      </LocationContext.Provider>
    </Provider>
  );
};
