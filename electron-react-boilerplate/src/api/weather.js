import axios from 'axios';

const API_KEY = 'a00097ff3fbe2bd2e348fc4e664254ab'; // Získejte svůj API klíč z OpenWeatherMap

export const fetchWeather = async (cityName) => {
  try {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`);
    return response.data;
  } catch (error) {
    throw new Error('City not found or no internet connection');
  }
};
