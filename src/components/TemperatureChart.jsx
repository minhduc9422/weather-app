import React, { useContext } from "react";
import { Line, Chart } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { WeatherContext } from "../services/weatherService";

const TemperatureChart = () => {
  const { weatherData } = useContext(WeatherContext);

  const temperatures = weatherData.hourlyForecast.map((data) => data.tempC);
  const minTemperature = Math.min(...temperatures);
  const maxTemperature = Math.max(...temperatures);

  const currentTime = new Date(weatherData.localTime);
  const currentTimeIndex = weatherData.hourlyForecast.findIndex((data) => {
    const dataTime = new Date(data.time);
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
          labels: weatherData.hourlyForecast.map((data) => data.time),
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
              pointBackgroundColor: ["blue"],
            },
          ],
        }}
        options={{
          plugins: {
            tooltip: {
              callbacks: {
                title: function (tooltipItems, data) {
                  return "";
                },
                label: function (context) {
                  return ": " + context.parsed.y + "°C";
                },
              },
            },
            legend: {
              display: true,
              align: "start",
              labels: {
                boxWidth: 0,
              },
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
              min: minTemperature - 10,
              max: maxTemperature + 10,
            },
          },
        }}
      />
    </div>
  );
};

export default TemperatureChart;
