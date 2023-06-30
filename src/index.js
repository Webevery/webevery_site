import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ReactNotifications } from 'react-notifications-component';
import App from './App';
import { ModalProvider } from './hooks';

import 'react-notifications-component/dist/theme.css';
import './styles/_variables.scss';
import './index.scss';


// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import './index.scss';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ReactNotifications />
      <HelmetProvider>
        <ModalProvider>
          <App />
        </ModalProvider>
      </HelmetProvider>
    </BrowserRouter>
  </React.StrictMode >
);
