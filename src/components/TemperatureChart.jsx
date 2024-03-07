import React, { useContext } from "react";
import { Line, Chart } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { WeatherContext } from "../services/weatherService";

const TemperatureChart = () => {
  const { weatherData } = useContext(WeatherContext);

  return (
    <div>
      <Line
        data={{
          labels: weatherData.hourlyForecast.map((data) => data.time),
          datasets: [
            {
              label: "°C",
              data: weatherData.hourlyForecast.map((data) => data.tempC),
              backgroundColor: "#5596f6",
              borderColor: "#5596f6",
            },
          ],
        }}
      />
    </div>
  );
};

export default TemperatureChart;
