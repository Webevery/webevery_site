import React from 'react';
import OurTeamPage from 'components/screens/OurTeamPage';

import { Helmet } from 'react-helmet-async';

const OurTeam = () => {
  return (
    <>
      <Helmet>
        <title>Наша команда розробників веб-сайтів!</title>
        <meta
          name="description"
          content="Розробка сайтів з індивідуальним дизайном. Сайт-візитка, інтернет-магазин, лендінг, корпоративний сайт."
        />
        <meta
          name="keywords"
          content="веб-сайт, сайт, веб-розробка, створення веб-сайтів, дизайн веб-сайтів, розробка інтернет-магазину, програмування, веб-додаток, SEO оптимізація, мобільна розробка,  дизайн, тестування, проектування"
        />
        <link rel="canonical" href="ourTeam" />
      </Helmet>
      <h1 className="seoTitle">Наша команда розробників веб-сайтів</h1>
      <OurTeamPage />
    </>
  );
};

export default OurTeam;
