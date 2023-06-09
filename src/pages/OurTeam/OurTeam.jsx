import React from 'react';
import OurTeamPage from 'components/screens/OurTeamPage';

import { Helmet } from 'react-helmet-async';

const OurTeam = () => {
  return (
    <>
      <Helmet>
        <title>Наша акоманда розробників веб-сайтів!</title>
        <meta
          name="description"
          content="Розробка сайтів з індивідуальним дизайном. Сайт-візитка, інтернет магазин, лендінг, корпоративний сайт."
        />
        <link rel="canonical" href="ourTeam" />
      </Helmet>
      <h1 className="seoTitle">Наша команда розробників веб-сайтів</h1>
      <OurTeamPage />
    </>
  );
};

export default OurTeam;
