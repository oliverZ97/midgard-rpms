import React from 'react';
import 'normalize.css';
import './App.scss';
import './SCSS/style.scss';
import DiceGenerator from './Components/DiceGenerator/DiceGenerator';
import WeatherGenerator from './Components/WeatherGenerator/WeatherGenerator';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import EncounterGenerator from './Components/EncounterGenerator/EncounterGenerator';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="content">
      <DiceGenerator />
      <WeatherGenerator />
      <EncounterGenerator />
      </div>
      <Footer />
    </div>
  );
}

export default App;
