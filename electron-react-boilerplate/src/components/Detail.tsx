import React from 'react';

interface DetailProps {
  weather: any;
}

const Detail: React.FC<DetailProps> = ({ weather }) => {
  return (
    <div>
      <h1>{weather.name}</h1>
      <p>Temperature: {weather.main.temp}</p>
      <p>Weather: {weather.weather[0].description}</p>
    </div>
  );
};

export default Detail;
