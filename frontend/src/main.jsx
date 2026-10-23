/**
 * main.jsx
 * simply push <App/> onto <div> root in index.html
 * 
 * BrowserRouter endukante
 * '/' and '/cart' different urls kosam
**/

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'; // fast rendering
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';

createRoot(document.getElementById('root'))
  .render(
    <StrictMode>
      <BrowserRouter> <App /> </BrowserRouter>
    </StrictMode>
  )
