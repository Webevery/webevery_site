// Ivika
// import React from 'react';
// import { socialData } from 'data';
// import SocialLinkItem from './SocialLinkItem';
// import styles from './SocialLink.module.scss';

// const SocialLinksList = ({ customBlockSize, customIconSize, customPosition }) => {
//   return (
//     <ul className={`${styles.wrapper} ${customPosition}`}>
//       {socialLink.map(({ id, name, spriteIcon, path }) => (
//         <SocialLinkItem
//           key={id}
//           name={name}
//           path={path}
//           spriteIcon={spriteIcon}
//           customBlockSize={customBlockSize}
//           customIconSize={customIconSize}
//         />
//       ))}
//     </ul>
//   );
// };

// export default SocialLinksList;

// Max
import React from 'react';
import styles from './SocialLink.module.scss';
import { socialData } from 'data';
import SocialLinkItem from './SocialLinkItem';
import sprite from '../../../images/symbol-defs.svg';

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
