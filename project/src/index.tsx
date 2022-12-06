import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import App from './components/app/app';
import { Provider } from 'react-redux';
import { store } from './store';
import { fetchOffers } from './store/reducers/offer/action';
import { checkAuth } from './store/reducers/authorization/action';
import 'react-toastify/dist/ReactToastify.css';

store.dispatch(fetchOffers());
store.dispatch(checkAuth());

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer />
      <App />
    </Provider>
  </React.StrictMode>
);
