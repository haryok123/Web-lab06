import React, { useState, useEffect } from 'react';
import '../assets/style.css';

const CardOfWeather = ({ weatherData}) => {
    if (!weatherData) {
      return <p>No weather data available</p>;
    }
    return (
      <div className="forecast">
        <div className="forecastHeader">
          <div className="day">{defineDay(weatherData.date)}</div>
        </div>
        <div className="forecastContent">
          <div className="forecastIcon">
            <img src={`${weatherData.day.condition.icon}`} alt="weatherIcon" />
          </div>
          <div className="textOfCard bold"> 
          Max temp {weatherData.day.maxtemp_c}<sup>o</sup>C
          </div>
          <div className="textOfCard bold"> 
          Min temp {weatherData.day.mintemp_c}<sup>o</sup>C
          </div>

          <div className="textOfCard bold">Chance of rain {weatherData.day.daily_chance_of_rain}%</div>
          <div className="textOfCard"> 
          Max wind {weatherData.day.maxwind_kph} km/h
          </div>
          <div className="textOfCard"> 
          Avghumidity {weatherData.day.avghumidity}%
          </div>
         
          
        </div>
      </div>
    );
  };
  
  function defineDay(dateStr) {
    const dateArr = dateStr.split("-");
    const today = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesdey", "Thursday", "Friday", "Saturday"];

    if (dateArr[2] == today.getDate()) {
      return "Today";
    } else if (dateArr[2] - today.getDate() === 1) {
      return "Tomorrow";
    } else if (dateArr[2] - today.getDate() === -1) {
      return "Yesterday";
    } 
    else {
      return (
        days[new Date(dateStr).getDay()] + " " + dateArr[2] + "." + dateArr[1]);
    }
}
export default CardOfWeather;