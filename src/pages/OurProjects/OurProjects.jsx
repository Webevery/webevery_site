import React from 'react';

import OurProjectsPage from 'components/screens/OurProjectsPage';
import { Helmet } from 'react-helmet-async';

const OurProjects = () => {
  return (
    <>
      <Helmet>
        <title>Створення веб-сайту з індивідуальним дизайном</title>
        <meta
          name="description"
          content="Розробка та створення веб-сайтів з індивідуальним дизайном. Сайт-візитка, інтернет-магазин, лендінг, корпоративний сайт. SEO оптимізація."
        />
        <link rel="canonical" href="ourProjects" />
      </Helmet>
      <h1 className="seoTitle">Готові варіанти наших веб-сайтів</h1>
      <OurProjectsPage />
    </>
  );
};

export default OurProjects;
