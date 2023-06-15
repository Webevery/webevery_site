import HowWeWorkPage from 'components/screens/HowWeWorkPage/HowWeWorkPage';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const HowWeWork = () => {
  return (
    <>
      <Helmet>
        <title>Як ми робимо веб-сайти</title>
        <meta
          name="description"
          content="Розробка та створення веб-сайтів з індивідуальним дизайном. Сайт-візитка, інтернет-магазин, лендінг, корпоративний сайт. SEO оптимізація."
        />
        <link rel="canonical" href="howWeWork" />
      </Helmet>
      <h1 className="seoTitle">Як ми працюємо з нашими замовниками</h1>
      <HowWeWorkPage />;
    </>
  );
};

export default HowWeWork;
