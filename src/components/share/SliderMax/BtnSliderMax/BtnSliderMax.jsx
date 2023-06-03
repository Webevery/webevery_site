import React from 'react';
import sprite from 'images/symbol-defs.svg';

import styles from './BtnSliderMax.module.scss';

const BtnSlider = ({ moveSlide, direction }) => {
  return (
    <>
      <button
        onClick={moveSlide}
        className={
          direction === 'next' ? styles.btnSlideNext : styles.btnSlidePrev
        }
      >
        {direction === 'next' ? (
          <svg width="100%" height="100%">
            <use href={sprite + '#icon-arrow_right'} />
          </svg>
        ) : (
          <svg width="100%" height="100%">
            <use href={sprite + '#icon-arrow_left'} />
          </svg>
        )}
      </button>
    </>
  );
};

export default BtnSlider;
