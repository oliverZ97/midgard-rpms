import React from 'react';
import 'normalize.css';
import './WeatherGenerator.css';

class WeatherGenerator extends React.Component {
    constructor() {
        super();
        this.state = ({
            weather: []
        })

        this.createWeather = this.createWeather.bind(this);
        this.setWeather = this.setWeather.bind(this);
    }

    createWeather() {
        let weather = [
            "", "Bewölkt", "Nieselregen", 
            "Regen", "Starkregen", "Windig", 
            "Sonnig", "Gewitter", "Schnee",
            "Hagel", "Orkan"
        ];
        let range = weather.length;
        let days = document.getElementById('days').value;
        let weathers = [];
        for(let idx = 0; idx < days; idx++){
            let rdm = Math.floor(Math.random()*(range - 1) + 1);
            weathers.push(weather[rdm]);
        }
        this.setWeather(weathers);
    }

    setWeather(weathers) {
        this.setState({
            weather: weathers
        })
    }

    render() {
        let counter = 0;
        let showWeather = this.state.weather.map((wea) => {
            counter++;
            return <p>Tag {counter}: {wea}</p>
        })
        return (
            <div className="weatherGenerator">
                <div className="weatherGenerator__menu">
                    <input className="weatherGenerator__input" id="days" type="number" placeholder="Tage" min="1"></input>
                    <button className="weatherGenerator__button" onClick={this.createWeather}>Wetter</button>
                </div>
                <div className="weatherGenerator__weather">
                    {showWeather}
                </div>
            </div>
        );
    }
}

export default WeatherGenerator;