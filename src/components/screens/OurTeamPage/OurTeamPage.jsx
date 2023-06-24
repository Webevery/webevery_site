import React, { useState } from 'react';
import styles from './OurTeamPage.module.scss';
import sprite from 'images/sprite.svg';
import { coworkersData } from 'data';
import { SliderNav, SliderInfo } from 'components/share/SliderMax';

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
        <div className={styles.mapAndCountriesWrapper}>
          <div className={styles.mapGeneralWrapper}>
            <svg width="728px" height="412px" className={styles.mapGeneral}>
              <use href={sprite + '#icon-mapGeneralWithoutCountries'} />
            </svg>
          </div>
          <ul className={styles.countriesWrapper}>
            {uniqCountries.map((item, index) => (
              <li className={styles.countryOnGeneralMap} key={index}>
                {item}
              </li>
            ))}
          </ul>
        </div>
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