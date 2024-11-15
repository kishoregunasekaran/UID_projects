import React, { useState } from "react";
import axios from "axios";
import WeatherCard from "./WeatherCard";
import "./App.css";
import weather from "./weather.png";

function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);

  const fetchWeather = async () => {
    try {
      const weatherResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4447921b495e9d4c9025ae8eab0eb8cd&units=metric`
      );
      const forecastResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=4447921b495e9d4c9025ae8eab0eb8cd&units=metric`
      );
      setWeatherData(weatherResponse.data);
      setForecastData(forecastResponse.data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  return (
    <div className="app">
      <div className="background">
      <img src={weather} alt="Weather" className="top-image" />
      <div className="search-container">
        <input
          type="text"
          value={city}
          onChange={handleInputChange}
          placeholder="Enter city"
        /></div>
        <button onClick={fetchWeather}>Get Weather</button>
      

      {weatherData && (
        <WeatherCard weatherData={weatherData} forecastData={forecastData} />
      )}
    </div>
    </div>
  );
}

export default App;
