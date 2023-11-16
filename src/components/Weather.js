import React, { useState, useEffect } from 'react';
import '../assets/style.css';
import { useCookies } from 'react-cookie';
import WeatherForecast from './WeatherForecast'; 
import FirstCardOfWeather from './FirstCardOfWeather';
import { useNavigate } from 'react-router-dom';  

const Weather = () => {

  const [weatherData, setWeatherData] = useState({});
  const [cookies, setCookies, removeCookies] = useCookies(['user']);
  const navigate = useNavigate(); 

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        fetchData(latitude, longitude).then((weatherData) => {
          setWeatherData(weatherData);
        });
      },
      (error) => {
        console.error("Error getting geolocation:", error);

      }
    );
  }, []);

  async function fetchData(latitude, longitude) {
    try {
      const response = await fetch(
        `http://api.weatherapi.com/v1/forecast.json?key=51c7800a304d41e6b4f175547231511&q=${latitude},${longitude}&days=7&aqi=no&alerts=no`
      );

      if (!response.ok) {
        throw new Error('Помилка при виконанні запиту');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }


  function logOutFunc() {
    removeCookies("user");
    navigate("/");
  }


  return (
    <div>
      <div className='topHeader'>
        <h2>Weather Forecast</h2>
        <button id='loginButtonInWeather' onClick={logOutFunc}>Log out</button>
      </div>
      {weatherData.forecast ? ( 
        <div >
          <div className="forecastTable">
            <div className="container">
              <div className="forecastContainer">
                {<FirstCardOfWeather forecastData={weatherData} />}
                <div className="forecastConteinerMini">
                  {<WeatherForecast forecastData={weatherData} />}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Weather;
