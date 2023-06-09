import React, { useState } from 'react';
import styles from './OurTeamPage.module.scss';
import sprite from 'images/sprite.svg';
import { coworkersData } from 'data';
import { SliderNav, SliderInfo } from 'components/share/SliderMax';

import { Helmet } from 'react-helmet-async';

const OurTeamPage = () => {
  const [currentIndex, setCurrentIndex] = useState(null);

  const allCountries = coworkersData.map(item => item.country);
  const uniqCountries = allCountries.reduce((acc, item) => {
    if (acc.includes(item)) {
      return acc;
    }
    return [...acc, item];
  }, []);

  return (
    <section className={styles.wrapper}>
      <Helmet>
        <title>Наша команда розробників веб-сайтів!</title>
        <meta
          name="description"
          content="Розробка сайтів з індивідуальним дизайном. Сайт-візитка, інтернет-магазин, лендінг, корпоративний сайт."
        />
        <link rel="canonical" href="ourTeam" />
      </Helmet>
      <h1>Наша команда розробників веб-сайтів</h1>
      {currentIndex === null ? (
        <>
          <svg className={styles.mapGeneral}>
            <use href={sprite + '#icon-mapGeneralWithoutCountries'} />
          </svg>
          <ul className={styles.countriesWrapper}>
            {uniqCountries.map((item, index) => (
              <li className={styles.countryOnGeneralMap} key={index}>
                {item}
              </li>
            ))}
          </ul>
        </>
      ) : (
        <SliderInfo
          array={coworkersData}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
      )}
      <SliderNav
        array={coworkersData}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />
    </section>
  );
};

export default OurTeamPage;
