import React from 'react';
import Header from '../../components/header/header';
import LocationItem from '../../components/location-item/location-item';
import LoginForm from '../../components/login-form/login-form';

function Login(): JSX.Element {
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
