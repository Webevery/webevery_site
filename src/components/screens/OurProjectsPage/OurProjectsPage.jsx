import React from 'react';
import { projectsData, projectsDataEN, currentLanguages } from '../../../data';
import Slider from '../../share/Slider';
import { useTranslation } from 'react-i18next';

import styles from './OurProjectsPage.module.scss';
// projectsDataEN,
// currentLanguages,
const OurProjectsPage = () => {
  const { i18n } = useTranslation();
  return (
    <>
      <section className={styles.wrapperProjects}>
        <div className={styles.cardProjects}>
          <Slider
            array={
              i18n.language === currentLanguages.UA
                ? projectsData
                : projectsDataEN
            }
          />
        </div>
      </section>
    </>
  );
};

export default OurProjectsPage;
