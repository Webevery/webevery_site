import React from 'react';
import { Link } from 'react-router-dom';

import styles from './AboutUs.module.scss';
import { ourTeam } from 'data/coworkers.data';
// import { nanoid } from 'nanoid';
import { FiArrowRightCircle } from 'react-icons/fi';

import defaultPhoto from 'images/ourTeam/default.jpeg';

const AboutUsPage = () => {
  const superDev = ourTeam.map(({ id, photo, name }) => {
    return (
      <li className={styles.superDev__wrapper} key={id}>
        <div className={styles.superDev}>
          <div className={styles.superDev__imgWrapper}>
            <img src={photo ? photo : defaultPhoto} alt={name} />
          </div>

          <h3> {name}</h3>
        </div>
        <Link className={styles.superDevClickMeLink} to={`${id}`}>
          <FiArrowRightCircle />
        </Link>
      </li>
    );
  });

  return (
    <section className={styles.superDev__section}>
      <ul className={styles.superDevList}>{superDev}</ul>
    </section>
  );
};

export default AboutUsPage;
