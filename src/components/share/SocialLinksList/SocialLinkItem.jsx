import React from 'react';
import styles from './SocialLink.module.scss';

const SocialLinkItem = ({
  name,
  path,
  arialabel,
  spriteIcon,
  customBlockSize,
  customIconSize,
}) => (
  <li className={`${styles.itemSocialLink} ${styles[name]} ${customBlockSize}`}>
    <a
      href={path}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={arialabel}
    >
      <svg className={`${styles.iconSocialLink}  ${customIconSize}`}>
        <use href={spriteIcon} />
      </svg>
    </a>
  </li>
);

export default SocialLinkItem;
