import React from 'react';
import styles from './HowWeWorkPage.module.scss';
import FAQ from './FAQ/FAQ';
// import BackToTop from '../../ui/BackToTop';

const HowWeWorkPage = () => {
  return (
    <>
      <h2 className={styles.HowWeWorkTitle}>How we work</h2>
      <FAQ />
    </>
  );
};

export default HowWeWorkPage;
