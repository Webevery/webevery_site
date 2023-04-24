import React from 'react';

import s from './AboutUs.module.scss';
import { ourTeam } from './ourTeam';

const AboutUs = () => {
  console.log(ourTeam);
  const superDev = ourTeam.map(({ id, photo, name }) => {
    return (
      <li className={s.superDev} key={id}>
        <div className={s.imgWrapper}>
          <img src={photo} alt={name} />
        </div>

        <h3> {name}</h3>
      </li>
    );
  });

  return (
    <section>
      <ul className={s.ourList}>{superDev}</ul>
    </section>
  );
};

export default AboutUs;
