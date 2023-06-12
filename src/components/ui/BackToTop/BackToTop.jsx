import Button from 'components/share/Button/Button';
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
      title={<Icon className={styles.backToTopIcon} />}
      id="backToTop"
      type="button"
      onClick={topFunction}
      className={styles.backToTop}
      ariaLabel="backToTop"
    />
  );
};

export default BackToTop;
