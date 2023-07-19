import React from 'react';
import WeatherIcon from '../weather-icons/WeatherIcon';
import WeatherCloudy from '../weather-icons/WeatherCloudy';
import WeatherSunny from '../weather-icons/WeatherSunny';
import WeatherStormy from '../weather-icons/WeatherStormy';
import WeatherSnowy from '../weather-icons/WeatherSnowy';

const weatherType = {
  CLOUDS: 'Clouds',
  CLEAR: 'Clear',
  SNOW: 'Snow',
  RAIN: 'Rain',
  DRIZZLE: 'Drizzle',
  THUNDERSTORM: 'Thunderstorm',
};

const requiredTime = 22;

const WeatherCurrentItem = ({ currentWeather }) => {
  let timestamp = new Date().getHours();

  if (timestamp < requiredTime) {
    switch (currentWeather) {
      case weatherType.CLOUDS:
        return <WeatherCloudy />;

      case weatherType.CLEAR:
        return <WeatherSunny />;

      case weatherType.SNOW:
        return <WeatherSnowy />;

      case weatherType.RAIN || weatherType.DRIZZLE || weatherType.THUNDERSTORM:
        return <WeatherStormy />;

      default:
        return <WeatherIcon />;
    }
  } else {
    return <WeatherIcon />;
  }
};

export default WeatherCurrentItem;
