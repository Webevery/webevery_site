import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import styles from './SharedLayout.module.scss';

const SharedLayout = () => {
  return (
    <>
      <div className={styles.wrapperSharedLayout}>
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
        <Footer />
      </div>
    </>
  );
};

export default SharedLayout;
