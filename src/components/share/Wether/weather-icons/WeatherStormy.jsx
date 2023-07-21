import React from 'react';
import styles from './WeatherIcon.module.scss';

const WeatherStormy = () => {
  return (
    <div className={styles.stormy}>
      <span className={styles.cloud}></span>
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
};

export default WeatherStormy;
