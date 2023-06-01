import React from 'react';
import styles from './HowWeWorkPage.module.scss';
import FAQ from './FAQ/FAQ';
import BackToTop from '../../ui/BackToTop';

const HowWeWorkPage = () => {
  return (
    <div className={styles.HowWeWork}>
      <h1 className={styles.HowWeWorkTitle}>How we work</h1>
      <FAQ />
      <BackToTop />
    </div>
  );
};

export default HowWeWorkPage;
