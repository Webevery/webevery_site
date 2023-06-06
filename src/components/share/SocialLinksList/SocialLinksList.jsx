import React from 'react';
import styles from './SocialLink.module.scss';
import { socialData } from 'data';
import SocialLinkItem from './SocialLinkItem';
import sprite from 'images/sprite.svg';

const SocialLinksList = ({
  customBlockSize,
  customIconSize,
  customPosition,
}) => (
  <ul className={`${styles.listWrapper} ${customPosition}`}>
    {socialData.map(({ id, name, path }) => {
      const spriteIcon = `${sprite}#icon-${name}`;

      return (
        <SocialLinkItem
          key={id}
          name={name}
          path={path}
          spriteIcon={spriteIcon}
          customBlockSize={customBlockSize}
          customIconSize={customIconSize}
        />
      );
    })}
  </ul>
);

export default SocialLinksList;
