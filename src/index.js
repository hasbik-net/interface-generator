import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { DataProvider } from './contexts/DataContext';
import App from './App';
import './setup/index.css';
import './setup/i18n';

ReactDOM.render(
  <Suspense fallback="loading">
    <DataProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </DataProvider>
  </Suspense>,
  document.getElementById('root')
);
