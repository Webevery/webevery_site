import React, { useState, useRef } from 'react';
import styles from './SliderMax.module.scss';
import BtnSliderMax from './BtnSliderMax';
import sprite from 'images/sprite.svg';

export const SliderInfo = ({ array, currentIndex, setCurrentIndex }) => {
  const [touchPosition, setTouchPosition] = useState(null);

  const prevSlide = () => {
    if (currentIndex !== null && currentIndex !== 0) {
      setCurrentIndex(currentIndex - 1);
    } else setCurrentIndex(array.length - 1);
  };

  const nextSlide = () => {
    if (currentIndex !== null && currentIndex !== array.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else setCurrentIndex(0);
  };

  // ! Logic handleTouch

  const handleTouchStart = e => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };

  const handleTouchMove = e => {
    const touchDown = touchPosition;

    if (touchDown === null) {
      return;
    }

    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;

    if (diff > 5) {
      nextSlide();
    }

    if (diff < 5) {
      prevSlide();
    }

    setTouchPosition(null);
  };

  return (
    <>
      <div
        className={styles.sliderInfoWrapper}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        {array.map((item, index) => {
          return (
            <div
              key={item.id}
              className={
                currentIndex === index ? styles.coworker : styles.hidden
              }
            >
              <img
                className={styles.photo}
                src={item.photo}
                alt={item.name}
                width={146}
                height={171}
                loading="lazy"
              />

              <div className={styles.informationWrapper}>
                <p className={styles.name}>{item.name}</p>
                <p className={styles.profession}>{item.profession}</p>

                <p className={styles.quote}>{item.quote}</p>
                <p className={styles.humor}>{item.humor}</p>
                <p className={styles.city}>
                  {item.city},
                  <span className={styles.country}> {item.country}</span>
                </p>
                <svg className={styles.map}>
                  <use href={`${sprite}#icon-map${item.location}`} />
                </svg>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

// export const SliderNav = ({ array, currentIndex, setCurrentIndex }) => {
//   // const [currentIndex, setCurrentIndex] = useState(null);
//   const [touchPosition, setTouchPosition] = useState(null);
//   const listRef = useRef(null);

//   function scrollToIndex(index) {
//     const list = listRef.current;
//     console.log('list', list);
//     const currentImg = list.querySelectorAll('li > img')[index];
//     currentImg.scrollIntoView({
//       behavior: 'smooth',
//       block: 'nearest',
//       inline: 'center',
//     });
//   }

//   const prevSlide = () => {
//     if (currentIndex !== null && currentIndex !== 0) {
//       setCurrentIndex(currentIndex - 1);
//     } else setCurrentIndex(array.length - 1);
//     scrollToIndex(currentIndex);
//   };

//   const nextSlide = () => {
//     if (currentIndex !== null && currentIndex !== array.length - 1) {
//       setCurrentIndex(currentIndex + 1);
//     } else setCurrentIndex(0);
//     scrollToIndex(currentIndex);
//   };

//   const goToSlide = index => setCurrentIndex(index);

//   // ! Logic handleTouch

//   const handleTouchStart = e => {
//     const touchDown = e.touches[0].clientX;
//     setTouchPosition(touchDown);
//   };

//   const handleTouchMove = e => {
//     const touchDown = touchPosition;

//     if (touchDown === null) {
//       return;
//     }

//     const currentTouch = e.touches[0].clientX;
//     const diff = touchDown - currentTouch;

//     if (diff > 5) {
//       nextSlide();
//     }

//     if (diff < 5) {
//       prevSlide();
//     }

//     setTouchPosition(null);
//   };

//   return (
//     <>
//       <div
//         className={styles.sliderNavWrapper}
//         onTouchStart={handleTouchStart}
//         onTouchMove={handleTouchMove}
//       >
//         <BtnSliderMax moveSlide={prevSlide} direction={'prev'} />
//         <ul className={styles.photosWrapper} ref={listRef}>
//           {array.map((item, index) => {
//             return (
//               <li
//                 key={item.id}
//                 className={styles.onePhotoWrapper}
//                 // onClick={() => scrollToIndex(index)}
//               >
//                 <img
//                   className={
//                     currentIndex === index
//                       ? styles.activePhotoSmall
//                       : styles.photoSmall
//                   }
//                   src={item.photoSmall}
//                   alt={item.name}
//                   onClick={() => goToSlide(index)}
//                   width={37}
//                   height={37}
//                   loading="lazy"
//                 />
//               </li>
//             );
//           })}
//         </ul>
//         <BtnSliderMax moveSlide={nextSlide} direction={'next'} />

//         <div className={styles.dotsWrapper}>
//           {array.map((_, index) => (
//             <div
//               key={index}
//               className={
//                 currentIndex !== index
//                   ? styles.dot
//                   : `${styles.dot} ${styles.activeDot}`
//               }
//               onClick={() => {
//                 goToSlide(index);
//                 scrollToIndex(currentIndex);
//               }}
//             ></div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

export const SliderNav = ({ array, currentIndex, setCurrentIndex }) => {
  // const [currentIndex, setCurrentIndex] = useState(null);
  const [touchPosition, setTouchPosition] = useState(null);
  const listRef = useRef(null);

  function scrollToIndex(index) {
    const list = listRef.current;
    console.log('list', list);
    const currentImg = list.querySelectorAll('img')[index];
    currentImg.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    });
  }

  const prevSlide = () => {
    if (currentIndex !== null && currentIndex !== 0) {
      setCurrentIndex(currentIndex - 1);
    } else setCurrentIndex(array.length - 1);
    scrollToIndex(currentIndex);
  };

  const nextSlide = () => {
    if (currentIndex !== null && currentIndex !== array.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else setCurrentIndex(0);
    scrollToIndex(currentIndex);
  };

  const goToSlide = index => setCurrentIndex(index);

  // ! Logic handleTouch

  const handleTouchStart = e => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };

  const handleTouchMove = e => {
    const touchDown = touchPosition;

    if (touchDown === null) {
      return;
    }

    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;

    if (diff > 5) {
      nextSlide();
    }

    if (diff < 5) {
      prevSlide();
    }

    setTouchPosition(null);
  };

  return (
    <>
      <div
        className={styles.sliderNavWrapper}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        <BtnSliderMax moveSlide={prevSlide} direction={'prev'} />
        <div className={styles.photosWrapper} ref={listRef}>
          {array.map((item, index) => {
            return (
              // <li
              //   key={item.id}
              //   className={styles.onePhotoWrapper}
              //   // onClick={() => scrollToIndex(index)}
              // >
              <img
                key={item.id}
                className={
                  currentIndex === index
                    ? styles.activePhotoSmall
                    : styles.photoSmall
                }
                src={item.photoSmall}
                alt={item.name}
                onClick={() => goToSlide(index)}
                width={37}
                height={37}
                loading="lazy"
              />
              // {/* </li> */}
            );
          })}
        </div>
        <BtnSliderMax moveSlide={nextSlide} direction={'next'} />

        <div className={styles.dotsWrapper}>
          {array.map((_, index) => (
            <div
              key={index}
              className={
                currentIndex !== index
                  ? styles.dot
                  : `${styles.dot} ${styles.activeDot}`
              }
              onClick={() => {
                goToSlide(index);
                scrollToIndex(currentIndex);
              }}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
};
