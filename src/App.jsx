import { React, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './commponents/Header/Header';

const Home = lazy(() => import('./pages/Home/Home'));
const AboutUs = lazy(() => import('./pages/AboutUs'));
const Contacts = lazy(() => import('./pages/Contacts/Contacts'));
const OurProjects = lazy(() => import('./pages/OurProjects'));
const NotFound = lazy(() => import('./pages/NotFound'));

const App = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/ourProjects" element={<OurProjects />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
