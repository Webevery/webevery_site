import React from 'react';

// import OurProjectsPage from 'components/screens/OurProjectsPage';
import OurWorks from 'components/screens/OurWorks';
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
        <meta
          name="keywords"
          content="веб-сайт, сайт, веб-розробка, створення веб-сайтів, дизайн веб-сайтів, розробка інтернет-магазину, програмування, веб-додаток, SEO оптимізація, мобільна розробка,  дизайн, тестування, проектування"
        />
        <link rel="canonical" href="ourProjects" />
      </Helmet>
      <h1 className="seoTitle">Готові варіанти наших веб-сайтів</h1>
      {/* <OurProjectsPage /> */}
      <OurWorks />
    </>
  );
};

export default OurProjects;
