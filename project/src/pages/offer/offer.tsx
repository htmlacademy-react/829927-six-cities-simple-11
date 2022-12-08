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
import { AuthorizationStatus, NameSpace } from '../../const';
import useAppSelector from '../../hooks/useAppSelector';
import { useParams } from 'react-router-dom';
import { useActions } from '../../hooks/useActions';
import Spinner from '../../components/spinner/spinner';

function Offer(): JSX.Element {
  const params = useParams();

  const { fetchOffer, fetchReviews, fetchOffersNearBy } = useActions();

  const { id } = params;

  const { authorizationStatus } = useAppSelector((state) => state[NameSpace.Authorization]);

  const { offer, offersNearBy, reviews, isOfferDataLoading, isOffersNearByLoading, isReviewsLoading } = useAppSelector(
    (state) => state[NameSpace.Offer]
  );

  const [activeCardId, setActiveCardId] = useState<number | null>(null);

  const onCardMouseEnter = (evt: React.MouseEvent<HTMLDivElement>) => {
    setActiveCardId(Number(evt.currentTarget.dataset.id));
  };

  const onCardMouseLeave = (evt: React.MouseEvent<HTMLDivElement>) => {
    setActiveCardId(null);
  };

  const isDataLoading = isOfferDataLoading || isOffersNearByLoading || isReviewsLoading;

  useEffect(() => {
    if (id) {
      fetchOffer(id);
      fetchReviews(id);
      fetchOffersNearBy(id);
    }
  }, [id]);

  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--property">
        {isDataLoading && <Spinner />}
        {!isDataLoading && offer !== null && (
          <>
            <section className="property">
              <OfferGallery images={offer.images} />
              <div className="property__container container">
                <div className="property__wrapper">
                  {offer.isPremium && (
                    <div className="property__mark">
                      <span>Premium</span>
                    </div>
                  )}
                  <OfferTitle>{offer.title}</OfferTitle>
                  <Rating rating={offer.rating} />
                  <OfferInfo type={offer.type} bedrooms={offer.bedrooms} adults={offer.maxAdults} price={offer.price} />
                  <OfferFeatures features={offer.goods} />
                  <OfferHost host={offer.host} description={offer.description} />
                  <section className="property__reviews reviews">
                    <Reviews reviews={reviews} />
                    {authorizationStatus === AuthorizationStatus.Auth && <ReviewForm />}
                  </section>
                </div>
              </div>
              <Map type="offer-page" offers={offersNearBy} activeCardId={activeCardId} />
            </section>
            <div className="container">
              <NearPlaces similarOffers={offersNearBy} onCardMouseEnter={onCardMouseEnter} onCardMouseLeave={onCardMouseLeave} />
            </div>
          </>
        )}
      </main>
    </div>
  );
}

export default Offer;
