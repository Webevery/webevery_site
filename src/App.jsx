import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const Header = lazy(() => import('./components/layout/Header'));
const Home = lazy(() => import('./pages/Home'));
const AboutUs = lazy(() => import('./pages/AboutUs'));
const Contacts = lazy(() => import('./pages/Contacts'));
const OurProjects = lazy(() => import('./pages/OurProjects'));
const NotFound = lazy(() => import('./pages/NotFound'));

const App = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            <Route path="aboutUs" element={<AboutUs />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="ourProjects" element={<OurProjects />} />

            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
