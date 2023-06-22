import React from 'react';
import { Helmet } from 'react-helmet-async';

import NotFoundPage from 'components/screens/NotFoundPage';

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Як ми робимо веб-сайти</title>
        <meta
          name="description"
          content="Розробка та створення веб-сайтів з індивідуальним дизайном. Сайт-візитка, інтернет-магазин, лендінг, корпоративний сайт. SEO оптимізація."
        />
        <link rel="canonical" href="*" />
      </Helmet>
      <NotFoundPage />
    </>
  );
};

export default NotFound;
