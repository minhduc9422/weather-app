import React, { useContext } from "react";
import { WeatherContext } from "../services/weatherService";

function DaylyForecast() {
  const { weatherForecastData } = useContext(WeatherContext);

  const formatDate = (inputDate) => {
    const date = new Date(inputDate);
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const day = date.getDate();
    const monthIndex = date.getMonth();
    const monthName = monthNames[monthIndex];

    return `${monthName} ${day}`;
  };

  return (
    <div className="flex flex-row items-center justify-center text-center">
      {weatherForecastData.slice(0, 3).map((forecast, index) => (
        <div
          key={index}
          className="py-5 px-9 rounded-lg hover:bg-sky-500 hover:text-white transition ease-in-out cursor-pointer"
        >
          <p>{index === 0 ? "Today" : formatDate(forecast.date)}</p>
          <img
            className="w-10 mx-auto mt-2"
            src={forecast.dailyIcon}
            alt="Weather Icon"
          />
          <p>Humidity</p>
          <p>{forecast.dailyHumidity}%</p>
        </div>
      ))}
    </div>
  );
}

export default DaylyForecast;
