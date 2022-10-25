import React from 'react';
import Header from '../../components/header/header';
import LoginForm from '../../components/login-form/login-form';

// пока не исправляла ошибки линтера
interface LoginProps {}

function Login(props: LoginProps): JSX.Element {
  return (
    <div className="page page--gray page--login">
      <Header isLoginPage />

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <LoginForm />
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Login;