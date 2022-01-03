import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { DataProvider } from './contexts/DataContext';
import { QuickSwapProvider } from './contexts/QuickSwapContext';
import App from './App';
import './setup/index.css';
import './setup/i18n';

ReactDOM.render(
  <Suspense fallback="loading">
    <DataProvider>
      <QuickSwapProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </QuickSwapProvider>
    </DataProvider>
  </Suspense>,
  document.getElementById('root')
);
