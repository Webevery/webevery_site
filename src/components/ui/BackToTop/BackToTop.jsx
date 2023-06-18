// import Button from 'components/share/Button/Button';
import React from 'react';
import styles from './BackToTop.module.scss';
import { ReactComponent as Icon } from '../../../images/V.svg';

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  let backToTop = document.getElementById('backToTop');
  if (!backToTop) return;
  if (
    document.body.scrollTop >= 100 ||
    document.documentElement.scrollTop >= 100
  ) {
    // backToTop.style.display = 'block';
    backToTop.className = `${styles.backToTop__visible}`;
  } else {
    // backToTop.style.display = 'none';
    backToTop.className = `${styles.backToTop}`;
  }
}

function topFunction() {
  document.body.scrollTop = 0; //For Safari
  document.documentElement.scrollTop = 0;
}

const BackToTop = () => {
  return (
    <>
      <button
        id="backToTop"
        type="button"
        onClick={topFunction}
        // className={styles.backToTop}
        className={scrollFunction()}
        aria-label="backToTop"
      >
        <Icon className={styles.backToTopIcon} />
      </button>
    </>
  );
};

export default BackToTop;
