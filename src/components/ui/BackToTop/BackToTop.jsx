import Button from 'components/share/Button/Button';
import React from 'react';
import styles from './BackToTop.module.scss';

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  let backToTop = document.getElementById('backToTop');
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTop.style.display = 'block';
  } else {
    backToTop.style.display = 'none';
  }
}

function topFunction() {
  document.body.scrollTop = 0; //For Safari
  document.documentElement.scrollTop = 0;
}

const BackToTop = () => {
  return (
    <Button
      title="Go to top"
      id="backToTop"
      type="button"
      onClick={topFunction}
      className={styles.backToTop}
      ariaLabel="backToTop"
    />
  );
};

export default BackToTop;
