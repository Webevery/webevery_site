import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import SharedLayout from 'components/layout/SharedLayout';

const Home = lazy(() => import('./pages/Home'));
const AboutUs = lazy(() => import('./pages/AboutUs'));
const DevPage = lazy(() => import('./pages/DevPage'));

const Contacts = lazy(() => import('./pages/Contacts'));
const OurProjects = lazy(() => import('./pages/OurProjects'));
const NotFound = lazy(() => import('./pages/NotFound'));

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          {/* Outlet start */}
          <Route index element={<Home />} />
          <Route path="aboutUs" element={<AboutUs />} />
          <Route path="aboutUs/:id" element={<DevPage />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="ourProjects" element={<OurProjects />} />

          <Route path="*" element={<NotFound />} />
          {/* Outlet end */}
        </Route>
      </Routes>
    </>
  );
};

export default App;
