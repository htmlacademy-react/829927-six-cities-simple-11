import React from 'react';
import { IOffer } from '../../types/IOffer';
import PlaceCard from '../place-card/place-card';
import Sort from '../sort/sort';

interface PlacesProps {
  offers: IOffer[];
  onCardMouseEnter: (evt: React.MouseEvent<HTMLDivElement>) => void;
  onCardMouseLeave: (evt: React.MouseEvent<HTMLDivElement>) => void;
}

function Places({ offers, onCardMouseEnter, onCardMouseLeave }: PlacesProps): JSX.Element {
  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{offers.length} places to stay in Amsterdam</b>
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
