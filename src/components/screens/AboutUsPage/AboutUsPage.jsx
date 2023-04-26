import React from 'react';
import { Link } from 'react-router-dom';

import s from './AboutUs.module.scss';
import { ourTeam } from '../../../data/ourTeam';
import defaultPhoto from '../../../images/ourTeam/default.jpeg';

const AboutUsPage = () => {
  const superDev = ourTeam.map(({ id, photo, name }) => {
    return (
      <li className={s.superDev} key={id}>
        <div className={s.imgWrapper}>
          <img src={photo ? photo : defaultPhoto} alt={name} />
        </div>

        <h3> {name}</h3>
        <Link className={s.clickMeLink} to={`${id}`}>
          Click me
        </Link>
      </li>
    );
  });

  return (
    <section>
      <ul className={s.ourList}>{superDev}</ul>
    </section>
  );
};

export default AboutUsPage;
