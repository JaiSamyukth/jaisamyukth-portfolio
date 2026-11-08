import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import './styles/tokens.css';
import './styles/engine.css';
import './styles/site.css';

declare global {
  interface Window {
    __hashRedirect?: boolean;
  }
}

const container = document.getElementById('root')!;
const app = (
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// Prerendered pages hydrate; a legacy /#/path redirect (or dev mode) renders fresh.
if (container.firstElementChild && !window.__hashRedirect) {
  hydrateRoot(container, app);
} else {
  container.textContent = '';
  createRoot(container).render(app);
}
