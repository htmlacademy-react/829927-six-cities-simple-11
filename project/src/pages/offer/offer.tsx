import React from 'react';
import Header from '../../components/header/header';
import NearPlaces from '../../components/near-places/near-places';
import OfferFeatures from '../../components/offer-features/offer-features';
import OfferGallery from '../../components/offer-gallery/offer-gallery';
import OfferHost from '../../components/offer-host/offer-host';
import OfferInfo from '../../components/offer-info/offer-info';
import Rating from '../../components/rating/rating';
import ReviewForm from '../../components/review-form/review-form';
import Reviews from '../../components/reviews/reviews';

interface OfferProps {
  isAuth?: boolean;
}

function Offer({ isAuth = false }: OfferProps): JSX.Element {
  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--property">
        <section className="property">
          <OfferGallery />
          <div className="property__container container">
            <div className="property__wrapper">
              <div className="property__mark">
                <span>Premium</span>
              </div>
              <div className="property__name-wrapper">
                <h1 className="property__name">Beautiful &amp; luxurious studio at great location</h1>
              </div>
              <Rating rating={4.8} />
              <OfferInfo />
              <OfferFeatures />
              <OfferHost />
              <section className="property__reviews reviews">
                <Reviews reviews={[{ id: 1 }]} />
                {isAuth && <ReviewForm />}
              </section>
            </div>
          </div>
          <section className="property__map map"></section>
        </section>
        <div className="container">
          <NearPlaces />
        </div>
      </main>
    </div>
  );
}

export default Offer;
