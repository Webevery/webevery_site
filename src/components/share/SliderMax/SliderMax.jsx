import React, { useState } from 'react';
import styles from './SliderMax.module.scss';

import BtnSliderMax from './BtnSliderMax';
import { coworkersData } from 'data';

const SliderMax = () => {
  const [slideIndex, setSlideIndex] = useState(1);
  const [touchPosition, setTouchPosition] = useState(null);

  const nextSlide = () => {
    if (slideIndex !== coworkersData.length) {
      setSlideIndex(slideIndex + 1);
    } else setSlideIndex(1);
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else setSlideIndex(coworkersData.length);
  };

  const moveDots = index => setSlideIndex(index);

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

    if (diff > coworkersData.length - 1) {
      nextSlide();
    }

    if (diff < (coworkersData.length - 1) * -1) {
      prevSlide();
    }

    setTouchPosition(null);
  };

  return (
    <>
      <div
        className={styles.wrapper}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        <BtnSliderMax moveSlide={prevSlide} direction={'prev'} />
        <div className={styles.photosWrapper}>
          {coworkersData.map((item, index) => {
            return (
              <img
                key={item.id}
                className={
                  slideIndex === index + 1
                    ? styles.activePhotoSmall
                    : styles.photoSmall
                }
                src={item.photoSmall}
                alt={item.name}
                //   className={styles.mockupImg}
                onClick={() => moveDots(index + 1)}
              />
            );
          })}
        </div>
        <BtnSliderMax moveSlide={nextSlide} direction={'next'} />

        <div className={styles.containerDots}>
          {coworkersData.map((_, index) => (
            <div
              key={index}
              className={
                slideIndex === index + 1 ? styles.activeDot : styles.dot
              }
              onClick={() => moveDots(index + 1)}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SliderMax;
