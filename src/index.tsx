import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ParticlesLoadedProvider } from "./contexts/ParticlesContext";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ParticlesLoadedProvider>
        <App/>
    </ParticlesLoadedProvider>
  </React.StrictMode>
);