import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import LoaderSuspense from 'components/share/loaders/LoaderSuspense/LoaderSuspense';

// import styles from './SharedLayout.module.scss';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<LoaderSuspense />}>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  );
};

export default SharedLayout;
