import React from 'react';

import HomePage from 'components/screens/HomePage';
import { Helmet } from 'react-helmet-async';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Створення веб-сайту з індивідуальним дизайном</title>
        <meta
          name="description"
          content="Розробка та створення веб-сайтів з індивідуальним дизайном. Сайт-візитка, інтернет-магазин, лендінг, корпоративний сайт. SEO оптимізація."
        />
        <link
          rel="canonical"
          href="https://webevery.github.io/webevery_site/"
        />
      </Helmet>
      <HomePage />
    </>
  );
};

export default Home;
