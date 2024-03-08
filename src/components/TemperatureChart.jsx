import React, { useContext } from "react";
import { Line, Chart } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { WeatherContext } from "../services/weatherService";

const TemperatureChart = () => {
  const { weatherData } = useContext(WeatherContext);

  const temperatures = weatherData.hourlyForecast.map((data) => data.tempC);
  const times = weatherData.hourlyForecast.map((data) => data.time);

  const currentTimeIndex = weatherData.hourlyForecast.findIndex((data) => {
    const dataTime = new Date(data.time);
    const currentTime = new Date(weatherData.localTime);
    return (
      dataTime.getHours() === currentTime.getHours() &&
      dataTime.getMinutes() === currentTime.getMinutes()
    );
  });

  const pointRadiusValues = temperatures.map((_, index) =>
    index === currentTimeIndex ? "circle" : false
  );

  return (
    <div>
      <Line
        data={{
          labels: times,
          datasets: [
            {
              label: "Temperature",
              data: temperatures,
              backgroundColor: "#f3f8ff",
              borderColor: "#5596f6",
              fill: true,
              borderWidth: 2,
              pointStyle: pointRadiusValues,
              cubicInterpolationMode: "monotone",
            },
          ],
        }}
        options={{
          plugins: {
            tooltip: {
              callbacks: {
                title: function () {
                  return "";
                },
                label: function (tooltipItem) {
                  return ": " + tooltipItem.parsed.y + "°C";
                },
              },
            },
            legend: {
              display: false,
            },
          },
          scales: {
            x: {
              display: false,
              grid: {
                display: false,
              },
            },
            y: {
              display: false,
              grid: {
                display: false,
              },
              min: Math.min(...temperatures) - 10,
              max: Math.max(...temperatures) + 10,
            },
          },
        }}
      />
    </div>
  );
};

export default TemperatureChart;
