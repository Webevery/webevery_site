//Ivika
// import React from 'react';
// import styles from './SocialLink.module.scss';

// const SocialLinkItem = ({
//   name,
//   path,
//   spriteIcon,
//   customBlockSize,
//   customIconSize,
// }) => {
//   return (
//     <li className={`${styles.itemSocialLink} ${name} ${customBlockSize}`}>
//       <a href={path} target="_blank" rel="noopener noreferrer">
//         <svg className={`${styles.iconSocialLink} ${customIconSize}`}>
//           <use href={spriteIcon} />
//         </svg>
//       </a>
//     </li>
//   );
// };
// export default SocialLinkItem;



// Max
import React from 'react';
import styles from './SocialLink.module.scss';


const SocialLinkItem = ({
  name,
  path,
  spriteIcon,
}) => (
  <li className={`${styles.itemSocialLink} ${styles[name]}`}>
    <a href={path} target="_blank" rel="noopener noreferrer">
      <svg className={`${styles.iconSocialLink}`}>
        <use href={spriteIcon} />
      </svg>
    </a>
  </li>
)



export default SocialLinkItem;