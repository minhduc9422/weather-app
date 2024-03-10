import React, { createContext, useContext, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchWeatherRequest,
  fetchWeatherSuccess,
  fetchWeatherFailure,
} from "../actions/weatherActions";

export const WeatherContext = createContext();

export function WeatherServiceProvider({ children }) {
  const { location } = useContext(LocationContext);
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.weather);

  useEffect(() => {
    dispatch(fetchWeatherRequest());
    axios
      .get(
        `http://api.weatherapi.com/v1/forecast.json?key=f5ac4be4a19c47d8a3e42522222112&q=${location}&days=10&aqi=no&alerts=yes`
      )
      .then((res) => {
        dispatch(fetchWeatherSuccess(res.data));
      })
      .catch((err) => {
        dispatch(fetchWeatherFailure(err.message));
      });
  }, [dispatch, location]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <WeatherContext.Provider
      value={{
        weatherData: data,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
}
