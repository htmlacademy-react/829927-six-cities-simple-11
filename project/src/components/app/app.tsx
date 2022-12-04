import { Provider } from 'react-redux';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import Login from '../../pages/login/login';
import Main from '../../pages/main/main';
import NotFound from '../../pages/not-found/not-found';
import Offer from '../../pages/offer/offer';
import { store } from '../../store';
import { IOffer } from '../../types/IOffer';

interface AppScreenProps {
  isAuth: boolean;
  similarOffers: IOffer[];
}

function App({ isAuth, similarOffers }: AppScreenProps): JSX.Element {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Main} element={<Main />} />
          <Route path={AppRoute.Login} element={<Login />} />
          <Route path={AppRoute.Offer} element={<Offer isAuth={isAuth} similarOffers={similarOffers} />} />
          <Route path={AppRoute.NotFound} element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
