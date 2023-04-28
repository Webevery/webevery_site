import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';

import { navData } from 'data';
import css from './NavBar.module.scss';

const Navbar = () => {
  const [nav, setNav] = useState(true);

  return (
    <>
      <header className={css.headerNav}>
        <NavLink to={`/`}>
          <h1 className={css.titleNav}>Webevery</h1>
        </NavLink>

        <ul className={nav ? css.menuNav : css.menuNav + ' ' + css.activeNav}>
          {navData.map(el => (
            <li key={el.id}>
              <NavLink
                to={el.path}
                onClick={() => setNav(true)}
                className={({ isActive }) =>
                  isActive ? css.activeNavLinkNav : css.navLinkNav
                }
              >
                {el.title}
              </NavLink>
            </li>
          ))}
        </ul>
        <button onClick={() => setNav(!nav)} className={css.mobileBtnNav}>
          {nav ? <AiOutlineMenu size={48} /> : <AiOutlineClose size={48} />}
        </button>
      </header>
    </>
  );
};

export default Navbar;
