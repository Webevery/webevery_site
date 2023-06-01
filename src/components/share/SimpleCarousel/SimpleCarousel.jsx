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
//                 <img
//                   className={styles.photo}
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
//                   <img
//                     className={styles.map}
//                     src={item.location}
//                     alt={`location ${item.name}`}
//                   ></img>
//                 </div>
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
//                 <img
//                   className={styles.sliderPhoto}
//                   src={item.photoSmall}
//                   alt={item.name}
//                 ></img>
//               </li>
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
//         {coworkersData.map(item => {
//           return (
//             <div key={item.id} className={styles.coworker}>
//               <img className={styles.photo} src={item.photo} alt={item.name} />
//               <div className={styles.informationWrapper}>
//                 <p className={styles.name}>{item.name}</p>
//                 <p className={styles.profession}>{item.profession}</p>

//                 <p className={styles.quote}>{item.quote}</p>
//                 <p className={styles.humor}>{item.humor}</p>
//                 <p className={styles.city}>
//                   {item.city},
//                   <span className={styles.country}> {item.country}</span>
//                 </p>
//                 <img
//                   className={styles.map}
//                   src={item.location}
//                   alt={`location ${item.name}`}
//                 ></img>
//               </div>
//             </div>
//           );
//         })}
//       </Slider>
//       <Slider {...settingsSliderNav}>
//         {coworkersData.map(item => {
//           return (
//             <li
//               className={styles.sliderItem}
//               key={item.id}
//               // onClick={() => setCoworkerId(item.id)}
//             >
//               <img
//                 className={styles.sliderPhoto}
//                 src={item.photoSmall}
//                 alt={item.name}
//               ></img>
//             </li>
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

import React, { useState } from 'react';
import Slider from 'react-slick';
import styles from './SimpleCarousel.module.scss';
import { coworkersData } from 'data';

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
                ></img>
              </div>
            </div>
          );
        })}
      </Slider>
      <Slider
        {...settingsSliderNav}
        asNavFor={nav1}
        ref={slider2 => setNav2(slider2)}
      >
        {coworkersData.map(item => {
          return (
            <li className={styles.sliderItem} key={item.id}>
              <img
                className={styles.sliderPhoto}
                src={item.photoSmall}
                alt={item.name}
              ></img>
            </li>
          );
        })}
      </Slider>
    </>
  );
};

export default Andrikanich;
