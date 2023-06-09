import React from 'react';
import styles from './HowWeWorkPage.module.scss';
import FAQ from './FAQ/FAQ';
import BackToTop from '../../ui/BackToTop';

import { Helmet } from 'react-helmet-async';

const HowWeWorkPage = () => {
  return (
    <>
      <Helmet>
        <title>Як ми робимо веб-сайти</title>
        <meta
          name="description"
          content="Розробка та створення веб-сайтів з індивідуальним дизайном.Сайт-візитка, інтернет-магазин, лендінг, корпоративний сайт. SEO оптимізація"
        />
        <link rel="canonical" href="howWeWork" />
      </Helmet>
      <h1 className={styles.mainTitle}>Як ми працюємо з нашими замовниками</h1>
      <h2 className={styles.HowWeWorkTitle}>How we work</h2>
      <FAQ />
      <BackToTop />
    </>
  );
};

export default HowWeWorkPage;
