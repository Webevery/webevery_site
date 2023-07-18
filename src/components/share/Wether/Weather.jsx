import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
// import WeatherIcon from './weather-icons';
import WeatherSunny from './weather-icons/WeatherSunny';
import styles from './Weather.module.scss';

const Wether = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [latitude, setLatitude] = useState(50.450001);
  const [longitude, setLongitude] = useState(30.523333);
  const { i18n } = useTranslation();
  // console.log();
  console.log(weatherData);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        setLatitude(position?.coords?.latitude);
        setLongitude(position?.coords?.longitude);
      });
    }
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}&units=metric&lang=${i18n.language}`
        );
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeatherData();
  }, [latitude, longitude, i18n.language]);

  return (
    <div className={styles.container}>
      <div>
        {weatherData ? (
          <div className={styles.weatherDataContent}>
            <p>
              &#128205; {weatherData.name}
              <span className={styles.sity}>{weatherData.sys.country}</span>
            </p>
            <p> {weatherData.main.temp.toFixed()}°C</p>
            {/* <p>Description: {weatherData.weather[0].description}</p> */}
          </div>
        ) : (
          <p> Loading weather data…</p>
        )}
      </div>
      {/* <WeatherIcon /> */}
      <WeatherSunny />
    </div>
  );
};

export default Wether;
