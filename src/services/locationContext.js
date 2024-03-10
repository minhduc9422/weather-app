import React, { createContext, useState } from "react";

export const LocationContext = createContext();

export const LocationProvider = ({ children }) => {
  const [location, setLocation] = useState("hanoi");

  const changeLocation = (newLocation) => {
    setLocation(newLocation);
  };

  return (
    <LocationContext.Provider value={{ location, changeLocation }}>
      {children}
    </LocationContext.Provider>
  );
};
