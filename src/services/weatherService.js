import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const WeatherContext = createContext();

export function WeatherServiceProvider({ children }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(
        "http://api.weatherapi.com/v1/forecast.json?key=f5ac4be4a19c47d8a3e42522222112&q=hanoi&days=10&aqi=no&alerts=yes"
      )
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  const extractWeatherData = (data) => {
    return {
      name: data.location.name,
      localTime: data.location.localtime,
      currentImage: data.current.condition.icon,
      currentCondition: data.current.condition.text,
      tempC: data.current.temp_c,
      wind: data.current.wind_kph,
      humidity: data.current.humidity,
      hourlyForecast: data.forecast.forecastday[0].hour.map((hour) => ({
        time: hour.time,
        tempC: hour.temp_c,
      })),
    };
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <WeatherContext.Provider value={{ weatherData: extractWeatherData(data) }}>
      {children}
    </WeatherContext.Provider>
  );
}
