import React, { useState } from 'react';
import styles from './OurTeamPage.module.scss';
import sprite from 'images/sprite.svg';
import { coworkersData } from 'data';
import { SliderNav, SliderInformation } from 'components/share/SliderMax';

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
        <SliderInformation
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
