import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { PlayerContextProvider } from './context/playerContext';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PlayerContextProvider>
      <App />
    </PlayerContextProvider>
  </React.StrictMode>
);
