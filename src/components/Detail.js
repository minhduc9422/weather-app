import React, { useContext } from "react";
import { useSelector } from "react-redux";
import Input from "./Input";
import { formatDate } from "../utils/dateUtils";

function Detail() {
  const weatherData = useSelector((state) => state.weather.weatherData);
  const formattedDate = formatDate(weatherData.localTime);

  return (
    <div>
      <div className="flex flex-row items-center justify-center w-auto text-sm my-6">
        <p className="w-1/3">Your city</p>
        <Input />
      </div>

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
            <sup className="-top-3.5 text-xs font-medium">°C</sup>
          </p>
        </div>
        <p className="font-medium text-2xl">{weatherData.currentCondition}</p>
      </div>

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

function WeatherInfo({ label, value }) {
  return (
    <div>
      <p className="text-gray-500">{label}</p>
      <p>{value}</p>
    </div>
  );
}

export default Detail;
