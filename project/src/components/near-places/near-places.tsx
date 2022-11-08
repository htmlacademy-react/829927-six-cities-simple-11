import React from 'react';
import { IOffer } from '../../types/IOffer';
import PlaceCard from '../place-card/place-card';

interface NearPlaces {
  similarOffers: IOffer[];
  onCardMouseEnter: (evt: React.MouseEvent<HTMLDivElement>) => void;
  onCardMouseLeave: (evt: React.MouseEvent<HTMLDivElement>) => void;
}

function NearPlaces({ similarOffers, onCardMouseEnter, onCardMouseLeave }: NearPlaces): JSX.Element {
  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {similarOffers.map((offer: IOffer) => (
          <PlaceCard key={offer.id} type="similar-card" place={offer} onCardMouseEnter={onCardMouseEnter} onCardMouseLeave={onCardMouseLeave} />
        ))}
      </div>
    </section>
  );
}

export default NearPlaces;
