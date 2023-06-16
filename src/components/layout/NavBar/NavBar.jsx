import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from './Logo_webery_lightyellow.svg';
import smallLogo from './small_logo_lightyellow.svg';
import sprite from 'images/sprite.svg';

import { navData } from 'data';
import styles from './NavBar.module.scss';

const Navbar = () => {
  const [nav, setNav] = useState(true);

  return (
    <>
      <header className={styles.headerNav}>
        <NavLink to={`/`} className={styles.navLinkLogo}>
          <img
            src={logo}
            alt="laptopLogo"
            className={styles.laptopLogo}
            width="109"
            height="29"
            title="logo"
            loading="lazy"
          />
          <img
            src={smallLogo}
            alt="mobileLogo"
            className={styles.mobileLogo}
            width="56"
            height="40"
            title="logo"
            loading="lazy"
          />
        </NavLink>

        <ul
          className={
            nav ? styles.menuNav : styles.menuBurger + ' ' + styles.activeBurger
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
            <svg width="100%" height="100%" fill="#fafce3">
              <use href={sprite + '#icon-burger-menu'} />
            </svg>
          ) : (
            <svg width="100%" height="100%">
              <use href={sprite + '#icon-close'} />
            </svg>
          )}
        </button>
      </header>
    </>
  );
};

export default Navbar;
