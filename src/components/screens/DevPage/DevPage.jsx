import React from 'react';
import styles from './DevPage.module.scss';

import { ourTeam } from 'data/coworkers.data';
import defaultPhoto from 'images/ourTeam/default.jpeg';

import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const DevPage = () => {
  const { id } = useParams();

  const [item, setItem] = useState(() => {
    const initialValue = JSON.parse(localStorage.getItem('dev'));
    return initialValue || {};
  });

  useEffect(() => {
    const dev = ourTeam.find(item => item.id === id);
    localStorage.setItem('dev', JSON.stringify(dev));
    setItem(dev);
  }, [id]);

  return (
    <section className={styles.devPage}>
      <div className={styles.devPage__contentWrapper}>
        <div className={styles.devPage__itemWrapper}>
          <div className={styles.devPage__imgWrapper}>
            <img src={item.photo ? item.photo : defaultPhoto} alt={item.name} />
          </div>
          <h3>{item.name}</h3>
        </div>
        <p className={styles.devPage__quote}>{item.quote}</p>
      </div>
      <Link className={styles.devPage__goBackLinc} to="/aboutUs">
        Back to team
      </Link>
    </section>
  );
};

export default DevPage;
