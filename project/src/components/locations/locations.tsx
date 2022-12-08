import React from 'react';
import { locations } from '../../const';
import { ICity } from '../../types/offer';
import LocationItem from '../location-item/location-item';

function Locations(): JSX.Element {
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {locations.map((location: ICity) => (
          <LocationItem locationName={location.name} type="list" key={location.name} />
        ))}
      </ul>
    </section>
  );
}

export default Locations;
