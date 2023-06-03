// // short video
// import React, { Component } from 'react';
// import Slider from 'react-slick';
// import { coworkersData } from 'data';
// import styles from '../../screens/OurTeamPage/OurTeamPage.module.scss';

// export default class AsNavFor extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       nav1: null,
//       nav2: null,
//     };
//   }

//   componentDidMount() {
//     this.setState({
//       nav1: this.slider1,
//       nav2: this.slider2,
//     });
//   }

//   render() {
//     return (
//       <div>
//         <h2>Slider Syncing (AsNavFor)</h2>
//         <h4>First Slider</h4>
//         <Slider
//           asNavFor={this.state.nav2}
//           ref={slider => (this.slider1 = slider)}
//           arrows={false}
//         >
//           {coworkersData.map(item => {
//             return (
//               <div key={item.id} className={styles.coworker}>
//                <img src={} alt={} />/                   className={styles.photo}
//                   src={item.photo}
//                   alt={item.name}
//                 />
//                 <div className={styles.informationWrapper}>
//                   <p className={styles.name}>{item.name}</p>
//                   <p className={styles.profession}>{item.profession}</p>

//                   <p className={styles.quote}>{item.quote}</p>
//                   <p className={styles.humor}>{item.humor}</p>
//                   <p className={styles.city}>
//                     {item.city},
//                     <span className={styles.country}> {item.country}</span>
//                   </p>
//                  <img src={} alt={} />/                     className={styles.map}
//                     src={item.location}
//                     alt={`location ${item.name}`}
//                   ><img src={} alt={} />//                 </div>
//               </div>
//             );
//           })}
//         </Slider>
//         <h4>Second Slider</h4>
//         <Slider
//           asNavFor={this.state.nav1}
//           ref={slider => (this.slider2 = slider)}
//           slidesToShow={7}
//           swipeToSlide={true}
//           focusOnSelect={true}
//         >
//           {coworkersData.map(item => {
//             return (
//               <li
//                 className={styles.sliderItem}
//                 key={item.id}
//                 // onClick={() => setCoworkerId(item.id)}
//               >
//                <img src={} alt={} />/                   className={styles.sliderPhoto}
//                   src={item.photoSmall}
//                   alt={item.name}
//                 ><img src={} alt={} />//               </li>
//             );
//           })}
//         </Slider>
//       </div>
//     );
//   }
// }
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// // indus video
// import React from 'react';
// import Slider from 'react-slick';
// import styles from './SimpleCarousel.module.scss';
// import { coworkersData } from 'data';

// const SimpleCarousel = () => {
//   //    $('.slider-for').slick({
//   //   slidesToShow: 1,
//   //   slidesToScroll: 1,
//   //   arrows: false,
//   //   fade: true,
//   //   asNavFor: '.slider-nav'
//   // });
//   // $('.slider-nav').slick({
//   //   slidesToShow: 3,
//   //   slidesToScroll: 1,
//   //   asNavFor: '.slider-for',
//   //   dots: true,
//   //   centerMode: true,
//   //   focusOnSelect: true
//   // });
//   const settingsSliderFor = {
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: false,
//     fade: true,
//     asNavFor: '.slider-nav',
//   };

//   const settingsSliderNav = {
//     slidesToShow: 7,
//     slidesToScroll: 1,
//     asNavFor: '.slider-for',
//     dots: true,
//     centerMode: true,
//     focusOnSelect: true,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 5,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 3,
//         },
//       },
//       {
//         breakpoint: 320,
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <>
//       <Slider {...settingsSliderFor}>
// {coworkersData.map(item => {
//   return (
//     <div key={item.id} className={styles.coworker}>
//      <img src={} alt={} />lassName={styles.photo} src={item.photo} alt={item.name} />
//       <div className={styles.informationWrapper}>
//         <p className={styles.name}>{item.name}</p>
//         <p className={styles.profession}>{item.profession}</p>

//         <p className={styles.quote}>{item.quote}</p>
//         <p className={styles.humor}>{item.humor}</p>
//         <p className={styles.city}>
//           {item.city},
//           <span className={styles.country}> {item.country}</span>
//         </p>
//        <img className={styles.map} src={item.location}
//           alt={`location ${item.name}`}/>

//                        </div>
//     </div>
//   );
// })}
//       </Slider>
//       <Slider {...settingsSliderNav}>
//         {coworkersData.map(item => {
//           return (
//             <li
//               className={styles.sliderItem}
//               key={item.id}
//               // onClick={() => setCoworkerId(item.id)}
//             >
//              <img src={} alt={} />/                 className={styles.sliderPhoto}
//                 src={item.photoSmall}
//                 alt={item.name}
//               ><img src={} alt={} />//             </li>
//           );
//         })}
//       </Slider>
//     </>
//   );
// };

// export default SimpleCarousel;
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// import React, { useState } from 'react';
// import Slider from 'react-slick';
// import './SimpleCarousel.module.scss';
// // import { coworkersData } from 'data';
// // import sprite from 'images/sprite.svg';

// import defaultCoworker from 'images/ourTeam/defaultCoworker.png';
// import volodymyrKavun from 'images/ourTeam/volodymyrKavun.png';
// import maksPeltek from 'images/ourTeam/maksPeltek.png';
// import nataliiaBoiko from 'images/ourTeam/nataliiaBoiko.png';
// import ivikaDuda from 'images/ourTeam/ivikaDuda.png';
// import andriiTsapkov from 'images/ourTeam/andriiTsapkov.png';
// import dmytroKolodchenko from 'images/ourTeam/dmytroKolodchenko.png';
// import maksPadalka from 'images/ourTeam/maksPadalka.png';
// import vitaliiPavlovskyi from 'images/ourTeam/vitaliiPavlovskyi.png';
// import myroslavKozar from 'images/ourTeam/myroslavKozar.png';
// // import volodymurPolztyuk from 'images/ourTeam/volodymurPolztyuk.png';
// // import maksymIgnatenko from 'images/ourTeam/maksymIgnatenko.png';
// import oksanaRomanenko from 'images/ourTeam/oksanaRomanenko.png';
// import ivanGagaus from 'images/ourTeam/ivanGagaus.png';
// import denysKudriavets from 'images/ourTeam/denysKudriavets.png';
// import dmitroKotenev from 'images/ourTeam/dmitroKotenev.png';

// import defaultCoworkerSmall from 'images/ourTeam/defaultCoworkerSmall.png';
// import volodymyrKavunSmall from 'images/ourTeam/volodymyrKavunSmall.png';
// import maksPeltekSmall from 'images/ourTeam/maksPeltekSmall.png';
// import nataliiaBoikoSmall from 'images/ourTeam/nataliiaBoikoSmall.png';
// import ivikaDudaSmall from 'images/ourTeam/ivikaDudaSmall.png';
// import andriiTsapkovSmall from 'images/ourTeam/andriiTsapkovSmall.png';
// import dmytroKolodchenkoSmall from 'images/ourTeam/dmytroKolodchenkoSmall.png';
// import maksPadalkaSmall from 'images/ourTeam/maksPadalkaSmall.png';
// import vitaliiPavlovskyiSmall from 'images/ourTeam/vitaliiPavlovskyiSmall.png';
// import myroslavKozarSmall from 'images/ourTeam/myroslavKozarSmall.png';
// // import volodymurPolztyukSmall from 'images/ourTeam/volodymurPolztyukSmall.png';
// // import maksymIgnatenkoSmall from 'images/ourTeam/maksymIgnatenkoSmall.png';
// import oksanaRomanenkoSmall from 'images/ourTeam/oksanaRomanenkoSmall.png';
// import ivanGagausSmall from 'images/ourTeam/ivanGagausSmall.png';
// import denysKudriavetsSmall from 'images/ourTeam/denysKudriavetsSmall.png';
// import dmitroKotenevSmall from 'images/ourTeam/dmitroKotenevSmall.png';

// const Andrikanich = () => {
//   const [nav1, setNav1] = useState();
//   const [nav2, setNav2] = useState();

//   const settingsSliderFor = {
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: false,
//     fade: true,
//   };
//   const settingsSliderNav = {
//     slidesToShow: 7,
//     slidesToScroll: 1,
//     dots: true,
//     centerMode: true,
//     focusOnSelect: true,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 5,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 3,
//         },
//       },
//       {
//         breakpoint: 320,
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//     ],
//   };
//   return (
//     <>
//       <Slider
//         {...settingsSliderFor}
//         asNavFor={nav2}
//         ref={slider1 => setNav1(slider1)}
//       >
//         <div>
//           <img src={volodymyrKavun} alt="volodymyrKavun" />
//         </div>
//         <div>
//           <img src={maksPeltek} alt="maksPeltek" />
//         </div>
//         <div>
//           <img src={nataliiaBoiko} alt="nataliiaBoiko" />
//         </div>
//         <div>
//           <img src={ivikaDuda} alt="ivikaDuda" />
//         </div>
//         <div>
//           <img src={andriiTsapkov} alt="andriiTsapkov" />
//         </div>
//         <div>
//           <img src={dmytroKolodchenko} alt="dmytroKolodchenko" />
//         </div>
//         <div>
//           <img src={maksPadalka} alt="maksPadalka" />
//         </div>
//         <div>
//           <img src={vitaliiPavlovskyi} alt="vitaliiPavlovskyi" />
//         </div>
//         <div>
//           <img src={myroslavKozar} alt="myroslavKozar" />
//         </div>
//         <div>
//           <img src={defaultCoworker} alt="defaultCoworker" />
//         </div>
//         <div>
//           <img src={oksanaRomanenko} alt="oksanaRomanenko" />
//         </div>
//         <div>
//           <img src={ivanGagaus} alt="ivanGagaus" />
//         </div>
//         <div>
//           <img src={denysKudriavets} alt="denysKudriavets" />
//         </div>
//         <div>
//           <img src={dmitroKotenev} alt="dmitroKotenev" />
//         </div>
//       </Slider>

//       <Slider
//         {...settingsSliderNav}
//         asNavFor={nav1}
//         ref={slider2 => setNav2(slider2)}
//       >
//         <div>
//           <img src={volodymyrKavunSmall} alt="volodymyrKavunSmall" />{' '}
//         </div>
//         <div>
//           <img src={maksPeltekSmall} alt="maksPeltekSmall" />{' '}
//         </div>
//         <div>
//           <img src={nataliiaBoikoSmall} alt="nataliiaBoikoSmall" />{' '}
//         </div>
//         <div>
//           <img src={ivikaDudaSmall} alt="ivikaDudaSmall" />{' '}
//         </div>
//         <div>
//           <img src={andriiTsapkovSmall} alt="andriiTsapkovSmall" />{' '}
//         </div>
//         <div>
//           <img src={dmytroKolodchenkoSmall} alt="dmytroKolodchenkoSmall" />{' '}
//         </div>
//         <div>
//           <img src={maksPadalkaSmall} alt="maksPadalkaSmall" />{' '}
//         </div>
//         <div>
//           <img src={vitaliiPavlovskyiSmall} alt="vitaliiPavlovskyiSmall" />{' '}
//         </div>
//         <div>
//           <img src={myroslavKozarSmall} alt="myroslavKozarSmall" />{' '}
//         </div>
//         <div>
//           <img src={defaultCoworkerSmall} alt="defaultCoworkerSmall" />{' '}
//         </div>
//         <div>
//           <img src={oksanaRomanenkoSmall} alt="oksanaRomanenkoSmall" />{' '}
//         </div>
//         <div>
//           <img src={ivanGagausSmall} alt="ivanGagausSmall" />{' '}
//         </div>
//         <div>
//           <img src={denysKudriavetsSmall} alt="denysKudriavetsSmall" />{' '}
//         </div>
//         <div>
//           <img src={dmitroKotenevSmall} alt="dmitroKotenevSmall" />{' '}
//         </div>
//       </Slider>
//     </>
//   );
// };

import React, { useState } from 'react';
import Slider from 'react-slick';
import styles from './SimpleCarousel.module.scss';

import './SimpleCarousel.module.scss';
// import styles from './SimpleCarousel.module.scss';

import { coworkersData } from 'data';
// import sprite from 'images/sprite.svg';

const Andrikanich = () => {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  const settingsSliderFor = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
  };
  const settingsSliderNav = {
    slidesToShow: 7,
    slidesToScroll: 1,
    dots: true,
    centerMode: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      <Slider
        {...settingsSliderFor}
        asNavFor={nav2}
        ref={slider1 => setNav1(slider1)}
      >
        {coworkersData.map(item => {
          return (
            <div key={item.id} className={styles.coworker}>
              <img className={styles.photo} src={item.photo} alt={item.name} />
              <div className={styles.informationWrapper}>
                <p className={styles.name}>{item.name}</p>
                <p className={styles.profession}>{item.profession}</p>

                <p className={styles.quote}>{item.quote}</p>
                <p className={styles.humor}>{item.humor}</p>
                <p className={styles.city}>
                  {item.city},
                  <span className={styles.country}> {item.country}</span>
                </p>
                <img
                  className={styles.map}
                  src={item.location}
                  alt={`location ${item.name}`}
                />
              </div>
            </div>
          );
        })}
      </Slider>

      <Slider
        className={styles.sliderNav}
        {...settingsSliderNav}
        asNavFor={nav1}
        ref={slider2 => setNav2(slider2)}
      >
        {coworkersData.map(item => {
          return (
            <li
              className={styles.sliderItem}
              key={item.id}
              // onClick={() => setCoworkerId(item.id)}
            >
              <img
                className={styles.sliderPhoto}
                src={item.photoSmall}
                alt={item.name}
              />
            </li>
          );
        })}
      </Slider>
    </>
  );
};

export default Andrikanich;
