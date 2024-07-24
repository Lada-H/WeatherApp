import React, { useState } from 'react';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../../src/components/Home';
import Detail from '../../src/components/Detail';
import './App.css';

export default function App() {
  const [weather, setWeather] = useState<any>(null);

  const handleSearchSuccess = (data: any) => {
    setWeather(data);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home onSearchSuccess={handleSearchSuccess} />} />
        {weather && <Route path="/detail" element={<Detail weather={weather} />} />}
      </Routes>
    </Router>
  );
}
