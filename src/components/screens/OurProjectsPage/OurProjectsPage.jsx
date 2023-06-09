import React from 'react';
import { projectsData } from '../../../data/projects.data';
import Slider from '../../share/Slider';

import styles from './OurProjectsPage.module.scss';

const OurProjectsPage = () => {
  return (
    <>
      <section className={styles.wrapperProjects}>
        <div className={styles.cardProjects}>
          <Slider array={projectsData} />
        </div>
      </section>
    </>
  );
};

export default OurProjectsPage;
