import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { similarOffers } from './mocks/similar-offers';
import { Provider } from 'react-redux';
import { store } from './store';

const Setting = {
  isAuth: true,
} as const;

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App similarOffers={similarOffers} isAuth={Setting.isAuth} />
    </Provider>
  </React.StrictMode>
);
