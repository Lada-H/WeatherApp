import React, { useState } from 'react';
import { fetchWeather } from '../api/weather';
const { insertHistory } = require('../db/database');

const WeatherApp = () => {
  const [cityName, setCityName] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    try {
      const data = await fetchWeather(cityName);
      setWeather(data);
      insertHistory(cityName);
      setError('');
    } catch (err) {
      setWeather(null);
      setError(err.message);
    }
  };

  return (
    <div>
      <h1>Weather App</h1>
      <input
        type="text"
        value={cityName}
        onChange={(e) => setCityName(e.target.value)}
        placeholder="Enter city name"
      />
      <button onClick={handleSearch}>Search</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {weather && (
        <div>
          <h2>{weather.name}</h2>
          <p>{weather.main.temp}°C</p>
          <p>{weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
