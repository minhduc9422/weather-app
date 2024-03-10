import "./App.css";
import React from "react";
import { WeatherServiceProvider } from "./services/weatherService";
import { LocationProvider } from "./services/locationContext";
import Detail from "./components/Detail";
import TemperatureChart from "./components/TemperatureChart";
import DailyForecast from "./components/DailyForecast";
import HourlyForecast from "./components/HourlyForecast";

function App() {
  return (
    <LocationProvider>
      <WeatherServiceProvider>
        <div className="mx-auto max-w-screen-md max-h-fit h-cus mt-4 py-5 px-5 bg-gradient-to-br bg-white shadow-xl shadow-gray-400">
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-1">
              <Detail />
            </div>
            <div className="col-span-2 grid-rows-3 h-80 ml-10 mt-14">
              <TemperatureChart className="row-span-1" />
              <HourlyForecast />
              <DailyForecast className="row-span-1" />
            </div>
          </div>
        </div>
      </WeatherServiceProvider>
    </LocationProvider>
  );
}

export default App;
