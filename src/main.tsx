// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App'; // <-- point App import here (see next step)
import './styles/theme.css'; // <-- add
import './styles/globals.css'; // <-- add

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
