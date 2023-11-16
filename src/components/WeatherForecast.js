import React, { useState, useEffect } from 'react';
import CardOfWeather from './CardOfWeather';

import '../assets/style.css';

const WeatherForecast = ({ forecastData }) => {
      if (!forecastData || !forecastData.forecast || !forecastData.forecast.forecastday) {
        return <p>No forecast data available</p>;
      }
    
      let forecastday = forecastData.forecast.forecastday.slice(1);
      console.log(forecastday);
      return (            
        forecastday.map((item) => (
            <CardOfWeather weatherData={item} key={item.date}/>
          ))
      );
    };
    
    
    export default WeatherForecast;
    