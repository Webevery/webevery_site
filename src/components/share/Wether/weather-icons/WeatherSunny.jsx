import React from 'react';
import styles from './WeatherIcon.module.scss';

const WeatherSunny = () => {
  return (
    <div className={styles.sunny}>
      <span className={styles.sun}></span>
    </div>
  );
};

export default WeatherSunny;
