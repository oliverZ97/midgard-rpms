import React from 'react';
import './App.css';
import DiceGenerator from './Components/DiceGenerator/DiceGenerator';
import WeatherGenerator from './Components/WeatherGenerator/WeatherGenerator';

function App() {
  return (
    <div className="App">
      <DiceGenerator />
      <WeatherGenerator />
    </div>
  );
}

export default App;
