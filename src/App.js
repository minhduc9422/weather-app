import "./App.css";
import React from "react";
import InputAndDetail from "./components/InputAndDetail";
import { WeatherServiceProvider } from "./services/weatherService";
import TemperatureChart from "./components/TemperatureChart";

function App() {
  return (
    <WeatherServiceProvider>
      <div className="mx-auto max-w-screen-xl mt-4 py-5 px-5 bg-gradient-to-br bg-white shadow-xl shadow-gray-400">
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-1">
            <InputAndDetail />
          </div>
          <div className="col-span-2">
            <TemperatureChart />
          </div>
        </div>
      </div>
    </WeatherServiceProvider>
  );
}

export default App;
