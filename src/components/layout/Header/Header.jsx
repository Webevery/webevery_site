import React from 'react';
import { NavLink } from 'react-router-dom';

import { navData } from 'data/navigation.data';

import styles from './Header.module.scss';

const Header = () => {
  return (
    <>
      <header className={styles.wrapperHeader}>
        <h1 className={styles.titleHeader}>Webevery</h1>
        <ul className={styles.menuHeader + ' ' + styles.activeHeader}>
          {navData.map(el => (
            <li key={el.id}>
              <NavLink
                to={el.path}
                className={({ isActive }) =>
                  isActive ? styles.activeNavLinkHeader : styles.navLinkHeader
                }
              >
                {el.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </header>
    </>
  );
};

export default Header;
