import React, { useContext } from "react";
import { WeatherContext } from "../services/weatherService";

function InputAndDetail() {
  const { weatherData } = useContext(WeatherContext);
  const formattedDate = formatDate(weatherData.localTime);

  return (
    <div>
      <div className="flex flex-row items-center justify-center w-auto text-sm my-6">
        <p className="w-1/3">Your city</p>
        <input
          type="text"
          placeholder={weatherData.name}
          className="rounded-md border-1 font-light w-40 p-2 h-8 shadow-xl ease-in-out focus:outline-none focus:ring focus:border-sky-200 delay-200 capitalize"
        ></input>
      </div>
      <div className="my-6 text-center items-center justify-center">
        <p className="text-base pt-10 text-gray-500">{formattedDate}</p>
        <div className="flex flex-row pt-3 items-center justify-center">
          <img
            className="w-28"
            src={weatherData.currentImage}
            alt="Current weather"
          />
          <p className="font-medium text-3xl">{weatherData.tempC}</p>
          <sup className="sups text-xs mb-3 font-medium">°C</sup>
        </div>
        <p className="font-medium text-2xl">{weatherData.currentCondition}</p>
      </div>
      <div className="flex flex-row gap-7 items-center justify-center text-center mx-auto py-4">
        <div>
          <p className="text-gray-500">Humidity</p>
          <p>{weatherData.currentHumidity}%</p>
        </div>
        <div>
          <p className="text-gray-500">Wind speed</p>
          <p>{weatherData.wind} km/h</p>
        </div>
      </div>
    </div>
  );
}

function formatDate(dateString) {
  const date = new Date(dateString);
  const options = {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  };
  return date.toLocaleString("en-US", options);
}

export default InputAndDetail;
