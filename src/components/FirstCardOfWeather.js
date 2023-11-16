import React, { useState, useEffect } from 'react';


import '../assets/style.css';

const FirstCardOfWeather = ({ forecastData }) => {
  
    if (!forecastData || !forecastData.forecast || !forecastData.forecast.forecastday) {
        return <p>No forecast data available</p>;
    }
    console.log(forecastData);
    let forecastday = forecastData.forecast.forecastday[0];
 
    return (
        <div className="today forecast">
            <div className="forecastHeader first">
                <div className="day">Today</div>
                <div className="date">{forecastday.date}</div>
            </div>
            <div className="forecastContent">
            <div className="location">{forecastData.location.name}, {forecastData.location.country}</div>
                <div className="degree">
                    <div className="forecastIcon">
                        <img src={forecastday.day.condition.icon} alt="weatherIcon"/>
                    </div>
                </div>
                <div className="textOfCard bold first">
                    Max temp {forecastday.day.maxtemp_c}<sup>o</sup>C
                </div>
                <div className="textOfCard bold first">
                    Min temp {forecastday.day.mintemp_c}<sup>o</sup>C
                </div>

                <div className="textOfCard bold first">Chance of rain {forecastday.day.daily_chance_of_rain}%</div>
                <div className="textOfCard first">
                    Max wind {forecastday.day.maxwind_kph} km/h
                </div>
                <div className="textOfCard first">
                    Avghumidity {forecastday.day.avghumidity}%
                </div>
            </div>
        </div>
    )
};


export default FirstCardOfWeather;
