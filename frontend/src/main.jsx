/**
 * main.jsx
 * simply push <App/> onto <div> root in index.html
**/

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'; // fast rendering
import App from './App.jsx';
import './index.css';

createRoot(document.getElementById('root'))
  .render(
    <StrictMode>
      <App />
    </StrictMode>
  )
