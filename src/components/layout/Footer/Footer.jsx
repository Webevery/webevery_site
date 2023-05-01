import React from 'react';
import { NavLink } from 'react-router-dom';
import { navData } from 'data';
import Logo from 'components/share/Logo';
import SocialLink from 'components/share/SocialLink';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
<>
  <footer className={styles.wrapperFooter}>
    <div className={styles.upperFooter}>
      <Logo/>
          <ul className={styles.linksFooterList}>
            {navData.map(({ id, path, title} ) => {
              return (
                <li key={id}>
                  <NavLink to={path}>{title}</NavLink>
                </li>)
            })}
      </ul>
    </div>
        <div className={styles.lowerFooter}>
          <span>Copyright © 2023 Webevery</span>
      <div  className={styles.social}><SocialLink/></div>
    </div>
  </footer>
    </>
  );
};

export default Footer;
