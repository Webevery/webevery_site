import React from 'react';
import s from './DevPage.module.scss';

import { ourTeam } from '../../../data/ourTeam';

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
    <section className={s.devPage}>
      <div className={s.contentWrapper}>
        <div className={s.itemWrapper}>
          <div className={s.imgWrapper}>
            <img src={item.photo} alt={item.name} />
          </div>
          <h3>{item.name}</h3>
        </div>
        {/* <ImQuotesLeft /> */}
        <p className={s.quote}>{item.quote}</p>
      </div>
      <Link className={s.goBackLinc} to="/aboutUs">
        Back to team
      </Link>
    </section>
  );
};

export default DevPage;
