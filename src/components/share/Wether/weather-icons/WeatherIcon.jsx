import React from 'react';
import styles from './WeatherIcon.module.scss';

const WeatherIcon = () => {
  return (
    <div>
      <div className={styles.supermoon}>
        <span className={styles.moon}></span>
        <span className={styles.meteor}></span>
      </div>
    </div>
  );
};

export default WeatherIcon;
