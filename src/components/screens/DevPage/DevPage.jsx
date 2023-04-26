import React from 'react';
import s from './DevPage.module.scss';

import { ourTeam } from '../../../data/ourTeam';

import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

// import { Link } from 'react-router-dom';

const DevPage = () => {
  const { id } = useParams();

  const [item, setItem] = useState(() => {
    const initialValue = JSON.parse(localStorage.getItem('item'));
    return initialValue || {};
  });

  useEffect(() => {
    const item = ourTeam.find(item => item.id === id);
    localStorage.setItem('item', JSON.stringify(item));
    setItem(item);
  }, [id]);

  return (
    <section className={s.devPage}>
      <div className={s.contentWrapper}>
        <div className={s.itemWrapper}>
          {/* <div className={s.imgWrapper}> */}
          <img src={item.photo} alt={item.name} />
          {/* </div> */}
          <h3>{item.name}</h3>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
          tempora cumque provident? Eveniet unde quaerat quibusdam, architecto
          facere assumenda ad pariatur neque consequuntur harum ipsa nostrum,
          atque velit amet voluptatibus.
        </p>
      </div>
      <Link className={s.goBackLinc} to="/aboutUs">
        Back to team
      </Link>
    </section>
  );
};

export default DevPage;
