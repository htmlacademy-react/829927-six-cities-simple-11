import React from 'react';
import useAppSelector from '../../hooks/useAppSelector';
import { IOffer } from '../../types/offer';
import PlaceCard from '../place-card/place-card';
import Sort from '../sort/sort';
import Spinner from '../spinner/spinner';

interface PlacesProps {
  onCardMouseEnter: (evt: React.MouseEvent<HTMLDivElement>) => void;
  onCardMouseLeave: (evt: React.MouseEvent<HTMLDivElement>) => void;
}

function Places({ onCardMouseEnter, onCardMouseLeave }: PlacesProps): JSX.Element {
  const { city, offers, isOffersDataLoading } = useAppSelector((state) => state.OFFERS);

  if (isOffersDataLoading) {
    return (
      <section className="cities__places places">
        <Spinner />
      </section>
    );
  }

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">
        {offers.length} places to stay in {city}
      </b>
      <Sort />
      <div className="cities__places-list places__list tabs__content">
        {offers.map((offer: IOffer) => (
          <PlaceCard type="city-card" place={offer} key={offer.id} onCardMouseEnter={onCardMouseEnter} onCardMouseLeave={onCardMouseLeave} />
        ))}
      </div>
    </section>
  );
}

export default Places;
