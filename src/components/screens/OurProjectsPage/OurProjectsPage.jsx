import React from 'react';
import { projectsData } from '../../../data/projects.data';
import Slider from '../../share/Slider';

import styles from './OurProjectsPage.module.scss';

import { Helmet } from 'react-helmet-async';

const OurProjectsPage = () => {
  return (
    <>
      <Helmet>
        <title>Створення веб-сайту з індивідуальним дизайном</title>
        <meta
          name="description"
          content="Розробка та створення веб-сайтів з індивідуальним дизайном. Сайт-візитка, інтернет-магазин, лендінг, корпоративний сайт. SEO оптимізація"
        />
        <link rel="canonical" href="ourProjects" />
      </Helmet>
      <section className={styles.wrapperProjects}>
        <h1>Готові варіанти наших веб-сайтів</h1>
        <div className={styles.cardProjects}>
          <Slider array={projectsData} />
        </div>
      </section>
    </>
  );
};

export default OurProjectsPage;
