import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { similarOffers } from './mocks/similar-offers';
import { offers } from './mocks/offers';

const Setting = {
  isAuth: true,
} as const;

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <App offers={offers} similarOffers={similarOffers} isAuth={Setting.isAuth} />
  </React.StrictMode>
);
