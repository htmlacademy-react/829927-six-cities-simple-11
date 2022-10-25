import React from 'react';
import { places } from '../../const';
import { IPlace } from '../../types/IPlace';
import PlaceCard from '../place-card/place-card';
import Sort from '../sort/sort';

interface PlacesProps {
  offersCount: number;
}

function Places({ offersCount }: PlacesProps): JSX.Element {
  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{offersCount} places to stay in Amsterdam</b>
      <Sort />
      <div className="cities__places-list places__list tabs__content">
        {places.map((place: IPlace) => (
          <PlaceCard place={place} key={place.id} />
        ))}
      </div>
    </section>
  );
}

export default Places;
