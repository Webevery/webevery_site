import { socialLink } from 'data';
import React from 'react';
import scss from './SocialLink.module.scss';

const SocialLink = ({ customBlockSize, customIconSize, customPosition }) => {
  return (
    <ul className={`${scss.iconsListSocialLink} ${customPosition}`}>
      {socialLink.map(({ id, name, spriteIcon, path }) => (
        <li
          key={id}
          className={`${scss.itemSocialLink} ${name} ${customBlockSize}`}
        >
          <a href={path}>
            <svg className={`${scss.iconSocialLink} ${customIconSize}`}>
              <use href={spriteIcon} />
            </svg>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialLink;
