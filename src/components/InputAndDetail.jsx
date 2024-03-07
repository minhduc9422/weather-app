import React, { useContext } from "react";
import { WeatherContext } from "../services/weatherService";

function InputAndDetail() {
  const { weatherData } = useContext(WeatherContext);
  const formattedDate = formatDate(weatherData.localTime);

  return (
    <div>
      <div className="flex flex-row items-center justify-center space-x-4 my-6">
        <p className="">Your city</p>
        <input
          type="text"
          placeholder={weatherData.name}
          className="rounded-md border-2 font-light p-2 h-8 shadow-xl focus:outline-none capitalize"
        ></input>
      </div>
      <div className="my-6 text-center items-center justify-center">
        <p className="text-xl pt-10 font-extralight">{formattedDate}</p>
        <div className="flex flex-row pt-3 items-center justify-center">
          <img
            className="w-1/3"
            src={weatherData.currentImage}
            alt="Current weather"
          />
          <p className="font-medium text-4xl">
            {weatherData.tempC}
            <sup className="sups">°C</sup>
          </p>
        </div>
        <p className="font-medium text-2xl">{weatherData.currentCondition}</p>
      </div>
      <div className="flex flex-row gap-7 items-center justify-center text-center mx-auto py-4">
        <div>
          <p>Humidity</p>
          <p>{weatherData.humidity}%</p>
        </div>
        <div>
          <p>Wind speed</p>
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
