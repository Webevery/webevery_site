import React from 'react';
import styles from './Footer.module.scss';
import SocialLinksList from 'components/share/SocialLinksList';
import sprite from 'images/sprite.svg';

const Footer = () => {
  return (
    <>
      <footer className={styles.wrapperFooter}>
        <h3 className={styles.copyright}>Copyright &copy; 2023 Webevery</h3>

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
