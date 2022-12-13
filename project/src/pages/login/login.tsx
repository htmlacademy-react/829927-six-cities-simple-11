import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/header/header';
import LocationItem from '../../components/location-item/location-item';
import LoginForm from '../../components/login-form/login-form';
import { AppRoute, AuthorizationStatus } from '../../const';
import useAppSelector from '../../hooks/useAppSelector';
import { getAuthorizationStatus } from '../../store/reducers/authorization/selectors';

function Login(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const navigate = useNavigate();

  if (authorizationStatus === AuthorizationStatus.Auth) {
    navigate(AppRoute.Main);
  }

  return (
    <div className="page page--gray page--login">
      <Header isLoginPage />

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <LoginForm />
          <section className="locations locations--login locations--current">
            <LocationItem locationName="Amsterdam" type="single" />
          </section>
        </div>
      </main>
    </div>
  );
}

export default Login;
