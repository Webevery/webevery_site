import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import SharedLayout from 'components/layout/SharedLayout';

const Home = lazy(() => import('./pages/Home'));

const Contacts = lazy(() => import('./pages/Contacts'));
const OurTeam = lazy(() => import('./pages/OurTeam'));
const OurProjects = lazy(() => import('./pages/OurProjects'));
const HowWeWork = lazy(() => import('./pages/HowWeWork'));
const Prices = lazy(() => import('./pages/Prices'));

const NotFound = lazy(() => import('./pages/NotFound'));

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          {/* Outlet start */}
          <Route index element={<Home />} />
          <Route path="ourTeam" element={<OurTeam />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="howWeWork" element={<HowWeWork />} />
          <Route path="ourProjects" element={<OurProjects />} />
          <Route path="prices" element={<Prices />} />

          <Route path="*" element={<NotFound />} />
          {/* Outlet end */}
        </Route>
      </Routes>
    </>
  );
};

export default App;
