import React from 'react';
import SocialLinksList from 'components/share/SocialLinksList';
import sprite from 'images/sprite.svg';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <>
      <footer className={styles.wrapperFooter}>
        <p className={styles.copyright}>Copyright &copy; 2023 Webevery</p>

        <SocialLinksList
          customPosition={styles.linkPosition}
          customBlockSize={styles.linkSize}
          customIconSize={styles.iconSize}
        />
        <div className={styles.mailBlock}>
          <a
            className={styles.mailLink}
            href="*"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className={styles.mailIcon}>
              <use href={sprite + `#envelope`} />
            </svg>
          </a>
          <p className={styles.mailText}>webforevery@gmail.com</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
