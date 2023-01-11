import React from 'react';
import ReactDOM from 'react-dom/client';
import { ReactKeycloakProvider } from '@react-keycloak/web';
import keycloak from './Keycloak';
import { Toaster } from 'react-hot-toast';

import { Provider } from 'react-redux';
import { store } from './app/store';

import './index.css';
import App from './App';
const eventLogger = (event, error) => {
  console.log('onKeycloakEvent', event, error);
};

const tokenLogger = (tokens) => {
  localStorage.token = tokens.token;
  localStorage.setItem('token', tokens.token);
  // console.log('onKeycloakTokens', tokens);
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <ReactKeycloakProvider
    authClient={keycloak}
    onEvent={eventLogger}
    onTokens={tokenLogger}
  >
    <Provider store={store}>
      <Toaster position="top-center" reverseOrder={false} />
      <App />
    </Provider>
  </ReactKeycloakProvider>
  // </React.StrictMode>
);
