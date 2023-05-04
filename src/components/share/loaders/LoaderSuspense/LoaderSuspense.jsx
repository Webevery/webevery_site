import React from 'react';
import styles from './LoaderSuspense.module.scss';

const LoaderSuspense = () => {
  return (
    <>
      <div className={styles.center_body}>
        <div className={styles.loader_circle}>
          Loading
          <span></span>
        </div>
      </div>
    </>
  );
};

export default LoaderSuspense;
