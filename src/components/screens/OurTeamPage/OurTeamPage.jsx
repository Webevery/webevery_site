// import React, { useState } from 'react';
// import styles from './OurTeamPage.module.scss';
// import { coworkersData } from 'data/coworkers.data';
// import mapGeneral from 'images/coworkersLocations/mapGeneral.png';
// // import { SimpleCarousel } from 'components/share/SimpleCarousel';
// // import  AsNavFor from 'components/share/SimpleCarousel/SimpleCarousel';

// const OurTeamPage = () => {
//     const [coworkerId, setCoworkerId] = useState(null);

//     return (
//       <section className={styles.wrapper}>
//         {!coworkerId ? (
//           <img
//             className={styles.mapGeneral}
//             src={mapGeneral}
//             alt="All coworker's locations"
//           />
//         ) : (
//           <div className={styles.coworker}>
//               <img
//                 className={styles.photo}
//                 src={coworkersData[coworkerId].photo}
//                 alt={coworkersData[coworkerId].name}
//               />
//             <div className={styles.informationWrapper}>
//               <p className={styles.name}>{coworkersData[coworkerId].name}</p>
//               <p className={styles.profession}>
//                 {coworkersData[coworkerId].profession}
//               </p>

//               <p className={styles.quote}>{coworkersData[coworkerId].quote}</p>
//               <p className={styles.humor}>{coworkersData[coworkerId].humor}</p>
//               <p className={styles.city}>
//                 {coworkersData[coworkerId].city},
//                 <span className={styles.country}>
//                   {' '}
//                   {coworkersData[coworkerId].country}
//                 </span>
//               </p>
//               <img
//                 className={styles.map}
//                 src={coworkersData[coworkerId].location}
//                 alt={`location ${coworkersData[coworkerId].name}`}
//               ></img>
//             </div>
//           </div>
//         )}

//         {/* <SimpleCarousel/> */}
//         {/* <AsNavFor/> */}

//         <ul className={styles.slider}>
//           {coworkersData.map(item => {
//             return (
//               <li
//                 className={styles.sliderItem}
//                 key={item.id}
//                 onClick={() => setCoworkerId(item.id)}
//               >
//                 <img
//                   className={styles.sliderPhoto}
//                   src={item.photoSmall}
//                   alt={item.name}
//                 ></img>
//               </li>
//             );
//           })}
//         </ul>
//       </section>
//     );
// }

// export default OurTeamPage;

// short video

import React, { useState } from 'react';
import styles from './OurTeamPage.module.scss';
import sprite from 'images/sprite.svg';
import { coworkersData } from 'data';
import { SliderNav, SliderInformation } from 'components/share/SliderMax';

const OurTeamPage = () => {
  const [currentIndex, setCurrentIndex] = useState(null);

  return (
    <section className={styles.wrapper}>
      {currentIndex === null ? (
        <svg className={styles.mapGeneral}>
          <use href={sprite + '#icon-mapGeneralWithoutCountries'} />
        </svg>
      ) : (
        <SliderInformation
          array={coworkersData}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
      )}
      <SliderNav
        array={coworkersData}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />
    </section>
  );
};

export default OurTeamPage;
