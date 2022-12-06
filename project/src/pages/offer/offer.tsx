import React, { useEffect, useState } from 'react';
import Header from '../../components/header/header';
import NearPlaces from '../../components/near-places/near-places';
import OfferFeatures from '../../components/offer-features/offer-features';
import OfferGallery from '../../components/offer-gallery/offer-gallery';
import OfferHost from '../../components/offer-host/offer-host';
import OfferInfo from '../../components/offer-info/offer-info';
import OfferTitle from '../../components/offer-title/offer-title';
import Rating from '../../components/rating/rating';
import ReviewForm from '../../components/review-form/review-form';
import Reviews from '../../components/reviews/reviews';
import Map from '../../components/map/map';
import { IOffer } from '../../types/IOffer';
import { AuthorizationStatus } from '../../const';
import useAppSelector from '../../hooks/useAppSelector';
import { useParams } from 'react-router-dom';

interface OfferProps {
  similarOffers: IOffer[];
}

function Offer({ similarOffers }: OfferProps): JSX.Element {
  const params = useParams();

  const { id } = params;

  const { authorizationStatus } = useAppSelector((state) => state.AUTHORIZATION);

  const { offers } = useAppSelector((state) => state.OFFER);

  const [activeCardId, setActiveCardId] = useState<number | null>(null);

  const onCardMouseEnter = (evt: React.MouseEvent<HTMLDivElement>) => {
    setActiveCardId(Number(evt.currentTarget.dataset.id));
  };

  const onCardMouseLeave = (evt: React.MouseEvent<HTMLDivElement>) => {
    setActiveCardId(null);
  };

  useEffect(() => {
    offers.find((offer: IOffer) => offer.id === Number(id));
  }, []);

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
              <OfferTitle>Beautiful &amp; luxurious studio at great location</OfferTitle>
              <Rating rating={4.8} />
              <OfferInfo />
              <OfferFeatures />
              <OfferHost />
              <section className="property__reviews reviews">
                <Reviews reviews={[{ id: 1 }]} />
                {authorizationStatus === AuthorizationStatus.Auth && <ReviewForm />}
              </section>
            </div>
          </div>
          <Map type="offer-page" offers={similarOffers} activeCardId={activeCardId} />
        </section>
        <div className="container">
          <NearPlaces similarOffers={similarOffers} onCardMouseEnter={onCardMouseEnter} onCardMouseLeave={onCardMouseLeave} />
        </div>
      </main>
    </div>
  );
}

export default Offer;
