import React from 'react';
import { socialLink } from 'data';
import SocialLinkItem from './SocialLinkItem';
import styles from './SocialLink.module.scss';

const SocialLink = ({ customBlockSize, customIconSize, customPosition }) => {
  return (
    <ul className={`${styles.iconsListSocialLink} ${customPosition}`}>
      {socialLink.map(({ id, name, spriteIcon, path }) => (
        <SocialLinkItem
          key={id}
          name={name}
          path={path}
          spriteIcon={spriteIcon}
          customBlockSize={customBlockSize}
          customIconSize={customIconSize}
        />
      ))}
    </ul>
  );
};

export default SocialLink;
