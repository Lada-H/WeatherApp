import React, { useState } from 'react';
import fetchWeather from '../api';
import { saveSearch } from '../database';

interface HomeProps {
  onSearchSuccess: (data: any) => void;
}

const Home: React.FC<HomeProps> = ({ onSearchSuccess }) => {
  const [city, setCity] = useState('');
  const [error, setError] = useState('');

  const handleSearch = async () => {
    try {
      const data = await fetchWeather(city);
      saveSearch(city);
      onSearchSuccess(data);
    } catch (error) {
      setError('City not found or no internet connection');
    }
  };

  return (
    <div>
      <h1>Weather App</h1>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
      />
      <button onClick={handleSearch}>Search</button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Home;
