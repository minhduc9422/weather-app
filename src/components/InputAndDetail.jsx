import React, { useContext } from "react";
import { WeatherContext } from "../services/weatherService";

function InputAndDetail() {
  const { weatherData } = useContext(WeatherContext);
  const formattedDate = formatDate(weatherData.localTime);

  return (
    <div>
      {/* Input section */}
      <div className="flex flex-row items-center justify-center w-auto text-sm my-6">
        <p className="w-1/3">Your city</p>
        <input
          type="text"
          placeholder={weatherData.name}
          className="rounded-md border-1 font-light w-40 p-2 h-8 shadow-xl ease-in-out focus:outline-none focus:ring focus:border-sky-200 delay-200 capitalize"
        />
      </div>

      {/* Weather detail section */}
      <div className="my-6 text-center items-center justify-center">
        <p className="text-base pt-10 text-gray-500">{formattedDate}</p>
        <div className="flex flex-row pt-3 items-center justify-center">
          <img
            className="w-28"
            src={weatherData.currentImage}
            alt="Current weather"
          />
          <p className="font-medium text-3xl">
            {weatherData.tempC}
            <sup className="sups text-xs mb-3 font-medium">°C</sup>
          </p>
        </div>
        <p className="font-medium text-2xl">{weatherData.currentCondition}</p>
      </div>

      {/* Additional weather information section */}
      <div className="flex flex-row gap-7 items-center justify-center text-center mx-auto py-4">
        <WeatherInfo
          label="Humidity"
          value={`${weatherData.currentHumidity}%`}
        />
        <WeatherInfo label="Wind speed" value={`${weatherData.wind} km/h`} />
      </div>
    </div>
  );
}

function formatDate(dateString) {
  const date = new Date(dateString);
  const options = {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };
  return date.toLocaleString("en-US", options);
}

function WeatherInfo({ label, value }) {
  return (
    <div>
      <p className="text-gray-500">{label}</p>
      <p>{value}</p>
    </div>
  );
}

export default InputAndDetail;
