import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";

export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    useEffect(() => {
        setLoaded(false);
    }, [props.coordinates]);

    function load() {
        let apiKey = "3bc520cc14bbdedfd7e45158f2ef0439";
        let longitude = props.coordinates.lon;
        let latitude = props.coordinates.lat;
        let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleResponse(response) {
        console.log(response.data);
        setForecast(response.data.list);
        setLoaded(true);
    }

    if (loaded) {
        console.log(forecast);
        return (
            <div className="WeatherForecast">
                <div className="row">
                    {forecast
                        .filter((item, index) => index % 8 === 0)
                        .slice(1, 6)
                        .map((dailyForecast, index) => (
                            <div className="col" key={index}>
                                <WeatherForecastDay data={dailyForecast} />
                            </div>
                        ))}
                </div>
            </div>
        );
    } else {
        load();
    }
}
