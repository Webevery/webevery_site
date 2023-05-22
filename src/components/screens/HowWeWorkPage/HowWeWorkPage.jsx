import React from 'react';
import styles from './HowWeWorkPage.module.scss';
import FAQ from './FAQ/FAQ';

const HowWeWorkPage = () => {
  return (
    <div className={styles.HowWeWork}>
      <h1 className={styles.HowWeWorkTitle}>How we work</h1>
      <FAQ />
    </div>
  );
};

export default HowWeWorkPage;
