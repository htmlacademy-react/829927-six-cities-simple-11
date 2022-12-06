import React from 'react';
import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useActions } from '../../hooks/useActions';
import useAppSelector from '../../hooks/useAppSelector';

interface HeaderProps {
  isLoginPage?: boolean;
}

function Header({ isLoginPage = false }: HeaderProps): JSX.Element {
  const { authorizationStatus } = useAppSelector((state) => state.AUTHORIZATION);
  const { logoutUser } = useActions();

  const handleLogoutClick = (evt: React.MouseEvent) => {
    evt.preventDefault();
    logoutUser();
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link header__logo-link--active" to={AppRoute.Main}>
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </Link>
          </div>
          {!isLoginPage && (
            <nav className="header__nav">
              <ul className="header__nav-list">
                {authorizationStatus === AuthorizationStatus.Auth && (
                  <>
                    <li className="header__nav-item user">
                      <div className="header__nav-profile">
                        <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                        <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                      </div>
                    </li>
                    <li className="header__nav-item">
                      <a className="header__nav-link" href="#" onClick={handleLogoutClick}>
                        <span className="header__signout">Sign out</span>
                      </a>
                    </li>
                  </>
                )}
                {(authorizationStatus === AuthorizationStatus.NoAuth || authorizationStatus === AuthorizationStatus.Unknown) && (
                  <li className="header__nav-item user">
                    <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Login}>
                      <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                      <span className="header__login">Sign in</span>
                    </Link>
                  </li>
                )}
              </ul>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
