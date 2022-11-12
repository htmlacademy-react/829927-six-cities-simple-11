import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import Login from '../../pages/login/login';
import Main from '../../pages/main/main';
import NotFound from '../../pages/not-found/not-found';
import Offer from '../../pages/offer/offer';
import { IOffer } from '../../types/IOffer';

interface AppScreenProps {
  isAuth: boolean;
  offers: IOffer[];
}

function App({ isAuth, offers }: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<Main offers={offers} />} />
        <Route path={AppRoute.Login} element={<Login />} />
        <Route path={AppRoute.Offer} element={<Offer isAuth={isAuth} />} />
        <Route path={AppRoute.NotFound} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
