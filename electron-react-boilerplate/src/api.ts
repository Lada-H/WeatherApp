import fetch from 'node-fetch';

const fetchWeather = async (city: string) => {
  const apiKey = 'YOUR_API_KEY'; // Zde vložit váš API klíč
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('City not found');
  }
  return response.json();
};

export default fetchWeather;
