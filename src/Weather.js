import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
export default function Weather() {
    const [weatherData, setWeatherData] = useState({ ready: false });
    function handleResponse(response) {
        console.log(response.data);
        setWeatherData({
            ready: true,
            temperature: response.data.main.temp,
            city: response.data.name,
            precipitation: response.data.main.pressure,
            humidity: response.data.main.humidity,
            wind: response.data.wind.speed,
            description: response.data.weather[0].description,
            date: "Wednesday 07:00",
            iconUrl:
                "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
        });
    }

    if (weatherData.ready) {
        return (
            <div className="Weather">
                <form>
                    <div className="row">
                        <div className="col-9">
                            <input
                                type="search"
                                placeholder="Search a city..."
                                className="form-control"
                                autoFocus="on"
                            />
                        </div>
                        <div className="col-3">
                            <input
                                type="submit"
                                value="search"
                                className="btn btn-primary w-100"
                            />
                        </div>
                    </div>
                </form>
                <h1>{weatherData.city}</h1>
                <ul>
                    <li>{weatherData.date}</li>
                    <li className="text-capitalize">
                        {weatherData.description}
                    </li>
                </ul>
                <div className="row mt-3">
                    <div className="col-6">
                        <img src={weatherData.iconUrl} alt="Mostly cloudy" />

                        <span className="temperature">
                            {Math.round(weatherData.temperature)}
                        </span>
                        <span className="unit">°C</span>
                    </div>
                    <div className="col-6">
                        <ul>
                            <li>Pressure: {weatherData.precipitation} hPa</li>
                            <li>
                                Humidity: {Math.round(weatherData.humidity)}%
                            </li>
                            <li>Wind: {Math.round(weatherData.wind)} km/h</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    } else {
        const apiKey = "1d038ee28ef2727a9f0310860ac10ae9";
        let city = "London";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
        return "loading...";
    }
}
