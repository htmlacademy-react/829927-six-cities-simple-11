import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';
import { AppRoute } from '../../const';
import Login from '../../pages/login/login';
import Main from '../../pages/main/main';
import NotFound from '../../pages/not-found/not-found';
import Offer from '../../pages/offer/offer';
import { store } from '../../store';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <HistoryRouter history={browserHistory}>
        <Routes>
          <Route path={AppRoute.Main} element={<Main />} />
          <Route path={AppRoute.Login} element={<Login />} />
          <Route path={AppRoute.Offer} element={<Offer similarOffers={[]} />} />
          <Route path={AppRoute.NotFound} element={<NotFound />} />
        </Routes>
      </HistoryRouter>
    </Provider>
  );
}

export default App;
