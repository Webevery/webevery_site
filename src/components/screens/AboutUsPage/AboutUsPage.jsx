// Natali
// import React from 'react';
// import { Link } from 'react-router-dom';

// import styles from './AboutUs.module.scss';
// import { coworkersData } from 'data';
// import { FiArrowRightCircle } from 'react-icons/fi';

// import defaultPhoto from 'images/ourTeam/default.jpeg';

// const AboutUsPage = () => {
//   const superDev = coworkersData.map(({ id, photo, name }) => {
//     return (
//       <li className={styles.superDev__wrapper} key={id}>
//         <div className={styles.superDev}>
//           <div className={styles.superDev__imgWrapper}>
//             <img src={photo ? photo : defaultPhoto} alt={name} loading="lazy" />
//           </div>

//           <h3> {name}</h3>
//         </div>
//         <Link className={styles.superDevClickMeLink} to={`${id}`}>
//           <FiArrowRightCircle />
//         </Link>
//       </li>
//     );
//   });

//   return (
//     <section className={styles.superDev__section}>
//       <h2>Our team</h2>
//       <ul className={styles.superDevList}>{superDev}</ul>
//     </section>
//   );
// };

// export default AboutUsPage;




// Max
import React from 'react';
import { Link } from 'react-router-dom';

import styles from './AboutUs.module.scss';
import { coworkersData } from 'data';
import { FiArrowRightCircle } from 'react-icons/fi';

import defaultPhoto from 'images/ourTeam/default.jpeg';

const AboutUsPage = () => {
  const superDev = coworkersData.map(({ id, photo, name }) => {
    return (
      <li className={styles.superDev__wrapper} key={id}>
        <div className={styles.superDev}>
          <div className={styles.superDev__imgWrapper}>
            <img src={photo ? photo : defaultPhoto} alt={name} loading="lazy" />
          </div>

          <h3> {name}</h3>
        </div>
        <Link className={styles.superDevClickMeLink} to={`${id}`}>
          <FiArrowRightCircle />
        </Link>
      </li>
    );
  });

  return (
    <section className={styles.superDev__section}>
      <h2>Our team</h2>
      <ul className={styles.superDevList}>{superDev}</ul>
    </section>
  );
};

export default AboutUsPage;
