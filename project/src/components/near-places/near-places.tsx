import React from 'react';
import useAppSelector from '../../hooks/useAppSelector';
import { getOffersNearByErrorStatus } from '../../store/reducers/offer/selectors';
import { IOffer } from '../../types/offer';
import ErrorMessage from '../error-message/error-message';
import PlaceCard from '../place-card/place-card';

interface NearPlacesProps {
  similarOffers: IOffer[];
}

function NearPlaces({ similarOffers }: NearPlacesProps): JSX.Element {
  const isOffersNearByError = useAppSelector(getOffersNearByErrorStatus);

  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      {isOffersNearByError && <ErrorMessage />}
      {!isOffersNearByError && (
        <div className="near-places__list places__list">
          {similarOffers.map((offer: IOffer) => (
            <PlaceCard key={offer.id} type="similar-card" place={offer} />
          ))}
        </div>
      )}
    </section>
  );
}

export default NearPlaces;
