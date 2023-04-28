import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';

import { navData } from 'data';
import styles from './NavBar.module.scss';

const Navbar = () => {
  const [nav, setNav] = useState(true);

  return (
    <>
      <header className={styles.headerNav}>
        <NavLink to={`/`}>
          <h1 className={styles.titleNav}>Webevery</h1>
        </NavLink>

        <ul
          className={
            nav ? styles.menuNav : styles.menuNav + ' ' + styles.activeNav
          }
        >
          {navData.map(el => (
            <li key={el.id}>
              <NavLink
                to={el.path}
                onClick={() => setNav(true)}
                className={({ isActive }) =>
                  isActive ? styles.activeNavLinkNav : styles.navLinkNav
                }
              >
                {el.title}
              </NavLink>
            </li>
          ))}
        </ul>
        <button
          onClick={() => setNav(!nav)}
          className={styles.mobileBtnNav}
          aria-label="BurgerMenu"
        >
          {nav ? (
            <AiOutlineMenu size={48} className={styles.btnOpenNav} />
          ) : (
            <AiOutlineClose size={48} className={styles.btnCloseNav} />
          )}
        </button>
      </header>
    </>
  );
};

export default Navbar;
