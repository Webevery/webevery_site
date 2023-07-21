import React from 'react';
import styles from './WeatherIcon.module.scss';

const WeatherCloudy = () => {
  return (
    <div className={styles.cloudy}>
      <span className={styles.cloud}></span>
      <span className={styles.cloud}></span>
    </div>
  );
};

export default WeatherCloudy;
