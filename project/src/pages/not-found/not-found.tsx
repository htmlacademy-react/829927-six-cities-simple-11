import Header from '../../components/header/header';
import LocationItem from '../../components/location-item/location-item';

function NotFound(): JSX.Element {
  return (
    <div className="page page--gray page--login">
      <Header isLoginPage />

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Page not found</h1>
          </section>
          <section className="locations locations--login locations--current">
            <LocationItem locationName="Go to main" type="single" />
          </section>
        </div>
      </main>
    </div>
  );
}

export default NotFound;
