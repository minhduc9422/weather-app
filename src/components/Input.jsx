import React, { useContext, useState } from "react";
import { LocationContext } from "../services/locationContext";
import { WeatherContext } from "../services/weatherService";

function Input() {
  const [inputLocation, setInputLocation] = useState("");
  const { changeLocation } = useContext(LocationContext);
  const { weatherData } = useContext(WeatherContext);

  const handleLocationChange = (e) => setInputLocation(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    changeLocation(inputLocation);
    setInputLocation("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={inputLocation}
          onChange={handleLocationChange}
          type="text"
          placeholder={weatherData.name}
          className="rounded-md border-1 font-light w-40 p-2 h-8 shadow-xl ease-in-out focus:outline-none focus:ring focus:border-sky-200 delay-75 capitalize"
          autoFocus
        />
        <button type="submit" className="hidden"></button>
      </form>
    </div>
  );
}

export default Input;
