import React, { useState, useEffect } from "react"; 
import { WiDaySunny, WiCloudy, WiRain } from "react-icons/wi";
import { Line } from "react-chartjs-2"; 
import warmnessImage from "./warmness.png";
import neutralImage from "./neutral.png";
import coldnessImage from "./coldness.png";
import summer_sun from "./summersun.jpg";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chart.js"; 
import "./WeatherCard.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const getCurrentDateTime = () => {
  const currentDate = new Date();
  return currentDate.toLocaleString("en-GB", { timeZone: "UTC" });
};

const WeatherCard = ({ weatherData, forecastData }) => {
  const [chartView, setChartView] = useState("daily");
  const [currentDateTime, setCurrentDateTime] = useState(getCurrentDateTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(getCurrentDateTime());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const renderWeatherIcon = (weather) => {
    switch (weather) {
      case "Clouds":
        return <WiCloudy size={64} />;
      case "Rain":
        return <WiRain size={64} />;
      default:
        return <WiDaySunny size={64} />;
    }
  };

  const getDailyForecast = (forecast) => {
    const dailyData = [];
    const dates = new Set();
    forecast.list.forEach((entry) => {
      const date = new Date(entry.dt * 1000).toLocaleDateString("en-GB", { timeZone: "UTC" });
      if (!dates.has(date)) {
        dailyData.push(entry);
        dates.add(date);
      }
    });
    return dailyData.slice(0, 30);
  };

  const dailyForecast = getDailyForecast(forecastData);

  const calculateWeeklyData = (dailyData) => {
    const weeklyData = [];
    for (let i = 0; i < dailyData.length; i += 7) {
      const weekData = dailyData.slice(i, i + 7);
      const averageTemp = weekData.reduce((acc, day) => acc + day.main.temp, 0) / weekData.length;
      weeklyData.push(averageTemp);
    }
    return weeklyData;
  };

  const getChartData = (view) => {
    switch (view) {
      case "weekly":
        const weeklyData = calculateWeeklyData(dailyForecast);
        return { 
          labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5"],
          datasets: [{ label: "Temperature (°C)", data: weeklyData, borderColor: "rgba(75, 192, 192, 1)", fill: false }]
        };
      case "daily":
      default:
        return {
          labels: dailyForecast.map(day => new Date(day.dt * 1000).toLocaleDateString("en-GB", { timeZone: "UTC" })),
          datasets: [{ label: "Temperature (°C)", data: dailyForecast.map(day => day.main.temp), borderColor: "rgba(75, 192, 192, 1)", fill: false }]
        };
    }
  };

  const getWeatherStatus = (temp) => {
    if (temp >= 50) return "Hot";
    if (temp >= 20 && temp < 50) return "Warm";
    if (temp >= 10 && temp < 20) return "Mild";
    if (temp >= 0 && temp < 10) return "Cold";
    return "Very Cold";
  };

  const currentWeatherStatus = getWeatherStatus(weatherData.main.temp);

  const getImagePath = (weatherStatus) => {
    switch (weatherStatus) {
      case "Hot":
        return warmnessImage;
      case "Warm":
        return summer_sun;
      case "Mild":
        return neutralImage;
      case "Cold":
      case "Very Cold":
        return coldnessImage;
      default:
        return ""; // Return an empty string if no valid status
    }
  };

const imagePath = getImagePath(currentWeatherStatus);

  const incrementForecastTime = (time, increment) => {
    const newDate = new Date(time * 1000);
    newDate.setDate(newDate.getDate() + increment);
    return newDate.toLocaleDateString("en-GB", { timeZone: "UTC" });
  };

  return (
    <div className="weather-page-container" role="main">
      <section className="weather-info-container" aria-labelledby="weather-title">
        <div className="current-date-time" aria-live="polite">
          <p>{currentDateTime}</p>
        </div>
        <h2 id="weather-title">{weatherData.name}</h2>
        <h1 className="temp">{weatherData.main.temp}°C</h1>
        <p>Humidity: {weatherData.main.humidity}%</p>
        <p>Wind Speed: {weatherData.wind.speed} m/s</p>
        <div className="weather-icon" aria-hidden="true">
          {renderWeatherIcon(weatherData.weather[0].main)}
        </div>
      </section>

      <section className="chart-container" aria-labelledby="chart-title">
        <h3 id="chart-title">Select Chart View:</h3>
        <select value={chartView} onChange={(e) => setChartView(e.target.value)} aria-label="Chart view selector">
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
        </select>
        
        <h3>Temperature Trend ({chartView.charAt(0).toUpperCase() + chartView.slice(1)})</h3>
        <Line data={getChartData(chartView)} />
      </section>

      <section className="forecast-container" aria-labelledby="forecast-title">
  <h3 id="forecast-title">Current Status:</h3>
  <p><h1 className="temp">{currentWeatherStatus}</h1></p>

  {/* Display the image only if imagePath is valid */}
  {imagePath && (
    <div className="weather-status-image-container">
      <img src={imagePath} alt={currentWeatherStatus} className="weather-status-image" />
    </div>
  )}
</section>

      <section className="forecast-container" aria-labelledby="forecast-title">
        <h3 id="forecast-title">5-Day Forecast:</h3>
        <div className="forecast" aria-label="5-day weather forecast">
          {dailyForecast.slice(0, 5).map((day, index) => (
            <div key={index} className="forecast-day" aria-label={`Forecast for ${incrementForecastTime(day.dt, index)}`}>
              <p>{incrementForecastTime(day.dt, index)}</p>
              <p>Temp: {day.main.temp}°C</p>
              {renderWeatherIcon(day.weather[0].main)}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default WeatherCard;
