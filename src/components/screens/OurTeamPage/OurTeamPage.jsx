import React, { useState, useRef } from 'react';
import styles from './OurTeamPage.module.scss';
// import sprite from 'images/sprite.svg';
import mapGeneral from 'images/locationsMaps/mapGeneralWithoutCountries.png';
import { coworkersData, coworkersDataEN, currentLanguages } from 'data';
import { SliderNav, SliderInfo } from 'components/share/SliderMax';
import { useTranslation } from 'react-i18next';

const OurTeamPage = () => {
  const [currentIndex, setCurrentIndex] = useState(null);
  const { i18n } = useTranslation();

  // создаёт массив всех локаций коллег
  const currentLanguageCoworkersData = () => {
    return i18n.language === currentLanguages.EN
      ? coworkersDataEN
      : coworkersData;
  };
  const allCountries = currentLanguageCoworkersData().map(item => item.country);
  // создаёт массив уникальных локаций коллег
  const uniqCountries = allCountries.reduce((acc, item) => {
    if (acc.includes(item)) {
      return acc;
    }
    return [...acc, item];
  }, []);

  const listRef = useRef(null);

  // всегда держит в зоне видимости текущий элемент из списка, которому прописывается listRef
  function scrollToIndex(index) {
    const list = listRef.current;
    const currentImg = list.querySelectorAll('img')[index];
    currentImg.scrollIntoView({
      behavior: 'auto',
      block: 'nearest',
      inline: 'center',
    });
  }

  return (
    <section className={styles.wrapper}>
      {currentIndex === null ? (
        <div className={styles.mapAndCountriesWrapper}>
          <div className={styles.mapGeneralWrapper}>
            {/* <svg width="728px" height="412px" className={styles.mapGeneral}>
              <use href={sprite + '#icon-mapGeneralWithoutCountries'} />
            </svg> */}
            <img
              className={styles.mapGeneral}
              src={mapGeneral}
              alt="All coworker's locations"
              width={728}
              height={412}
              loading="lazy"
            />
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
          array={
            i18n.language === currentLanguages.EN
              ? coworkersDataEN
              : coworkersData
          }
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
          scrollToIndex={scrollToIndex}
        />
      )}
      <SliderNav
        array={
          i18n.language === currentLanguages.EN
            ? coworkersDataEN
            : coworkersData
        }
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        scrollToIndex={scrollToIndex}
        listRef={listRef}
      />
    </section>
  );
};

export default OurTeamPage;
