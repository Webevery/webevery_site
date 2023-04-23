import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import { navData } from 'data/navigation.data';

import styles from './Header.module.scss';

const Header = () => {
  return (
    <>
      <header className={styles.headerHeader}>
        <div className={styles.containerHeader}>
          <div className={styles.boxHeader}>
            <h1 className={styles.titleHeader}>Webevery</h1>
            <ul className={styles.menuHeader + ' ' + styles.activeHeader}>
              {navData.map(el => (
                <li key={el.id}>
                  <NavLink to={el.path} className={styles.navLinkHeader}>
                    {el.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </header>
      <div className={styles.wrapperBodyHeader}>
        <Outlet />
      </div>
    </>
  );
};

export default Header;
