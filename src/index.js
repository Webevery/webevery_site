import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ReactNotifications } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import './styles/_variables.scss';
import './index.scss';

import { HelmetProvider } from 'react-helmet-async';

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import './index.scss';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ReactNotifications />
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </BrowserRouter>
  </React.StrictMode>
);
