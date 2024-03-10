import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeLocation } from "../actions/locationActions";
import { fetchWeather } from "../actions/weatherActions";

function Input() {
  const [inputLocation, setInputLocation] = useState("");
  const dispatch = useDispatch();
  const { weatherData } = useSelector((state) => state.weather);

  const handleLocationChange = (e) => setInputLocation(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(changeLocation(inputLocation));
    dispatch(fetchWeather(inputLocation));
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
