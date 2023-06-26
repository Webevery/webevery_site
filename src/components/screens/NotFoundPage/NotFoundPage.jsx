import React from 'react';
import styles from './NotFoundPage.module.scss';
import notFound from '../../../images/notFound.png';

const NotFoundPage = () => {
  return (
    <div className={styles.wrapper}>
      <img src={notFound} alt="the page is not found" />
      <h1>NotFoundPage</h1>
    </div>
  );
};

export default NotFoundPage;
