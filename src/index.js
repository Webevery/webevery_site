import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './styles/_variables.scss';
import './index.scss';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/webevery_site">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
