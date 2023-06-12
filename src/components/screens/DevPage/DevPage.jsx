// Natali
// import React from 'react';
// import styles from './DevPage.module.scss';

// import { coworkersData } from 'data';
// import defaultPhoto from 'images/ourTeam/default.jpeg';
// import { ImQuotesRight } from 'react-icons/im';

// import { useParams, Link } from 'react-router-dom';
// import { useState, useEffect } from 'react';

// const DevPage = () => {
//   const { id } = useParams();

//   const [item, setItem] = useState({});

//   useEffect(() => {
//     const dev = coworkersData.find(item => item.id === id);

//     setItem(dev);
//   }, [id]);

//   return (
//     <section className={styles.devPage}>
//       <h2>Developer page</h2>

//       <div className={styles.devPage__contentWrapper}>
//         <div className={styles.devPage__itemWrapper}>
//           <div className={styles.devPage__imgWrapper}>
//             <img src={item.photo ? item.photo : defaultPhoto} alt={item.name} loading="lazy"/>
//           </div>
//           <h3>{item.name}</h3>
//         </div>
//         <div className={styles.devPage__quoteWrapper}>
//           <ImQuotesRight className={styles.devPage__quoteMark} size={100} />
//           <p className={styles.devPage__quote}>{item.quote}</p>
//         </div>

//         {/* {item.email && item.email} */}
//       </div>
//       <Link className={styles.devPage__goBackLinc} to="/aboutUs">
//         Back to team
//       </Link>
//     </section>
//   );
// };

// export default DevPage;

import React from 'react';
import styles from './DevPage.module.scss';

import { coworkersData } from 'data';
import defaultPhoto from 'images/ourTeam/default.jpeg';
import { ImQuotesRight } from 'react-icons/im';
import { SlEmotsmile } from 'react-icons/sl';

import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const DevPage = () => {
  const { id } = useParams();

  const [item, setItem] = useState({});

  useEffect(() => {
    const dev = coworkersData.find(item => item.id === id);

    setItem(dev);
  }, [id]);

  return (
    <section className={styles.devPage}>
      <h2>Developer page</h2>

      <div className={styles.devPage__contentWrapper}>
        <div className={styles.devPage__itemWrapper}>
          <div className={styles.devPage__imgWrapper}>
            <img
              src={item.photo ? item.photo : defaultPhoto}
              alt={item.name}
              loading="lazy"
            />
          </div>
          <h3>{item.name}</h3>
        </div>
        <div className={styles.devPage__quoteHumorWrapper}>
          <ImQuotesRight className={styles.devPage__quoteMark} size={100} />
          <p className={styles.devPage__quote}>{item.quote}</p>

          <SlEmotsmile className={styles.devPage__humorMark} size={100} />
          <p className={styles.devPage__humor}>{item.humor}</p>
        </div>
      </div>
      <Link className={styles.devPage__goBackLinc} to="/aboutUs">
        Back to team
      </Link>
    </section>
  );
};

export default DevPage;
