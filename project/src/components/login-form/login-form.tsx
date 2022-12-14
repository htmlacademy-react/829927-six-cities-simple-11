import React, { FormEvent, useRef } from 'react';
import { toast } from 'react-toastify';
import { useActions } from '../../hooks/useActions';

function LoginForm(): JSX.Element {
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const { loginUser } = useActions();

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (loginRef.current === null || passwordRef.current === null) {
      return toast.error('All fields must be filled');
    }

    if (!/[\d]/.test(passwordRef.current.value)) {
      return toast.error('Password must contain at least one number');
    }

    if (!/[A-Za-z]/.test(passwordRef.current.value)) {
      return toast.error('Password must contain at least one letter');
    }

    loginUser({
      login: loginRef.current.value,
      password: passwordRef.current.value,
    });
  };

  return (
    <section className="login">
      <h1 className="login__title">Sign in</h1>
      <form className="login__form form" action="#" method="post" onSubmit={handleSubmit}>
        <div className="login__input-wrapper form__input-wrapper">
          <label className="visually-hidden">E-mail</label>
          <input className="login__input form__input" type="email" name="email" placeholder="Email" required ref={loginRef} />
        </div>
        <div className="login__input-wrapper form__input-wrapper">
          <label className="visually-hidden">Password</label>
          <input className="login__input form__input" type="password" name="password" placeholder="Password" required ref={passwordRef} />
        </div>
        <button className="login__submit form__submit button" type="submit">
          Sign in
        </button>
      </form>
    </section>
  );
}

export default LoginForm;
