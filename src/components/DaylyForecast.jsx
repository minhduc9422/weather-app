import React, { useContext } from "react";
import { WeatherContext } from "../services/weatherService";

function DaylyForecast() {
  const { weatherData } = useContext(WeatherContext);

  return (
    <div>
      <div className="flex flex-row items-center justify-center text-center">
        <div className="px-5">
          <p>Today</p>
          <img className="w-10 mx-auto mt-2" src={weatherData.currentImage} />
          <p>Humidtity</p>
          <p>{weatherData.currentHumidity}%</p>
        </div>
        <div className="px-5">
          <p>Today</p>
          <img className="w-10 mx-auto mt-2" src={weatherData.currentImage} />
          <p>Humidtity</p>
          <p>{weatherData.currentHumidity}%</p>
        </div>
        <div className="px-5">
          <p>Today</p>
          <img className="w-10 mx-auto mt-2" src={weatherData.currentImage} />
          <p>Humidtity</p>
          <p>{weatherData.currentHumidity}%</p>
        </div>
        <div className="px-5">
          <p>Today</p>
          <img className="w-10 mx-auto mt-2" src={weatherData.currentImage} />
          <p>Humidtity</p>
          <p>{weatherData.currentHumidity}%</p>
        </div>
      </div>
    </div>
  );
}

export default DaylyForecast;
