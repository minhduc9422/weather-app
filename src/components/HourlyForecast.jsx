import React, { useContext } from "react";
import { WeatherContext } from "../services/weatherService";

function HourlyForecast() {
  const { weatherData } = useContext(WeatherContext);

  return (
    <div>
      <div className="flex flex-row border-t-2 border-b-2 overflow-hidden gap-1 items-center text-center justify-start">
        <div className="p-3">
          <p className="text-center">{weatherData.hourlyForecast[0].tempC}°C</p>
          <img src={weatherData.hourlyForecast[0].hourlyIcon} alt="" />
          <p>{formatTime(weatherData.hourlyForecast[0].time)}</p>
        </div>
        <div className="p-3">
          <p>{weatherData.hourlyForecast[0].tempC}°C</p>
          <img src={weatherData.hourlyForecast[0].hourlyIcon} alt="" />
          <p>{formatTime(weatherData.hourlyForecast[0].time)}</p>
        </div>
        <div className="p-3">
          <p>{weatherData.hourlyForecast[0].tempC}°C</p>
          <img src={weatherData.hourlyForecast[0].hourlyIcon} alt="" />
          <p>{formatTime(weatherData.hourlyForecast[0].time)}</p>
        </div>
      </div>
    </div>
  );
}

function formatTime(inputTime) {
  const [datePart, timePart] = inputTime.split(" ");

  return timePart;
}

export default HourlyForecast;
